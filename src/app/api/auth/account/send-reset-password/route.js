// /app/api/auth/forgot-password/route.js
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json(); // lấy dữ liệu từ body

    const { email } = body;
    console.log(email, body);

    if (!email) {
      return NextResponse.json(
        { message: "Email là bắt buộc" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ email }, process.env.AUTH_SECRET, {
      expiresIn: "15m",
    });
    const resetLink = `${process.env.NEXT_PUBLIC_URL}reset-password?token=${token}`;

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Lux Marketing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Yêu cầu đặt lại mật khẩu",
      html: `
        <p>Chúng tôi nhận được yêu cầu đặt lại mật khẩu từ bạn.</p>
        <p>Nhấn vào nút bên dưới để đặt lại mật khẩu:</p>
        <a href="${resetLink}" style="padding: 10px 20px; background: #007bff; color: white; text-decoration: none;">Đặt lại mật khẩu</a>
        <p>Liên kết này sẽ hết hạn sau 15 phút.</p>
      `,
    });

    return NextResponse.json({ message: "Đã gửi email đặt lại mật khẩu" });
  } catch (err) {
    console.error("Lỗi khi gửi email đặt lại mật khẩu:", err);
    return NextResponse.json({ message: "Lỗi gửi email" }, { status: 500 });
  }
}
