import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json(); // lấy dữ liệu từ body
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email là bắt buộc" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ email }, process.env.AUTH_SECRET, {
      expiresIn: "1h",
    });

    const verificationLink = `${process.env.NEXT_PUBLIC_URL}verify-email?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail", // hoặc cấu hình SMTP cụ thể
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    console.log(transporter)

    await transporter.sendMail({
      from: `"Admin Lux Marketing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Xác minh email của bạn",
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #333;">Xác minh địa chỉ email của bạn</h2>
      <p style="font-size: 16px; color: #555;">
        Cảm ơn bạn đã đăng ký tài khoản với <strong>Lux Marketing</strong>.<br />
        Vui lòng nhấp vào nút bên dưới để xác minh email của bạn:
      </p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${verificationLink}" 
           style="background-color: #007BFF; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
          Xác minh Email
        </a>
      </div>
      <p style="font-size: 14px; color: #999;">
        Nếu bạn không yêu cầu xác minh email, bạn có thể bỏ qua email này.
      </p>
      <hr style="border: none; border-top: 1px solid #ddd;" />
      <p style="font-size: 12px; color: #aaa; text-align: center;">
        &copy; 2025 Lux Marketing. Mọi quyền được bảo lưu.
      </p>
    </div>
  `,
    });

    console.log("Email:", email);

    return NextResponse.json(
      { message: "Email xác minh đã được gửi" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Lỗi gửi email:", err);
    return NextResponse.json({ message: "Lỗi gửi email" }, { status: 500 });
  }
}
