import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function missingEnv(...keys) {
  return keys.filter((k) => !process.env[k] || String(process.env[k]).trim() === "");
}

export async function POST(req) {
  try {
    // 1) Check SMTP ENV trước để khỏi lỗi mơ hồ
    const miss = missingEnv("SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS");
    if (miss.length) {
      return NextResponse.json(
        { ok: false, error: `Thiếu ENV SMTP: ${miss.join(", ")}` },
        { status: 500 }
      );
    }

    const form = await req.formData();

    const fullName = String(form.get("fullName") || "").trim();
    const gender = String(form.get("gender") || "").trim();
    const email = String(form.get("email") || "").trim();
    const birthYear = String(form.get("birthYear") || "").trim();
    const desc = String(form.get("desc") || "").trim();
    const role = String(form.get("role") || "").trim();

    const file = form.get("pdfs"); // key frontend gửi

    if (!fullName || !email) {
      return NextResponse.json(
        { ok: false, error: "Thiếu họ tên hoặc email" },
        { status: 400 }
      );
    }

    // 2) Validate file (khuyến nghị bắt buộc CV)
    if (!file || typeof file.arrayBuffer !== "function") {
      return NextResponse.json(
        { ok: false, error: "Thiếu file CV (pdfs)" },
        { status: 400 }
      );
    }

    const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name || "");
    if (!isPdf) {
      return NextResponse.json(
        { ok: false, error: "File CV phải là PDF" },
        { status: 400 }
      );
    }

    const MAX = 2 * 1024 * 1024;
    if (file.size > MAX) {
      return NextResponse.json(
        { ok: false, error: "File lớn hơn 2MB" },
        { status: 400 }
      );
    }

    const buf = Buffer.from(await file.arrayBuffer());

    // 3) SMTP transport
    const secure =
      String(process.env.SMTP_SECURE || "").trim() === "true" ||
      Number(process.env.SMTP_PORT) === 465;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // debug nhanh khi gặp lỗi SMTP (có thể bật khi cần)
      // logger: true,
      // debug: true,
    });

    // (tuỳ chọn) verify SMTP để debug nhanh
    // await transporter.verify();

    const to = (process.env.MAIL_TO || "nhansu@newlinkinvest.com").trim();
    const from = (process.env.MAIL_FROM || process.env.SMTP_USER).trim();

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Ứng tuyển] ${role || ""} - ${fullName}`,
      html: `
        <h3>Đơn ứng tuyển</h3>
        <p><b>Họ tên:</b> ${fullName}</p>
        <p><b>Giới tính:</b> ${gender}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Năm sinh:</b> ${birthYear}</p>
        <p><b>Vị trí:</b> ${role}</p>
        <p><b>Thư ứng tuyển:</b><br/>${desc.replace(/\n/g, "<br/>")}</p>
      `,
      attachments: [
        {
          filename: file.name || "cv.pdf",
          content: buf,
          contentType: "application/pdf",
        },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("send-recruitment error:", e);

    // trả lỗi dễ hiểu hơn
    const msg = String(e?.message || "Server error");
    const code = e?.code ? ` (${e.code})` : "";

    return NextResponse.json(
      { ok: false, error: msg + code },
      { status: 500 }
    );
  }
}