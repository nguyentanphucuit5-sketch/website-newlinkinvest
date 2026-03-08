import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Lấy dữ liệu từ body của request
    const { project, fullName, phone, email } = await request.json();

    // Cấu hình Nodemailer với Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Cấu hình nội dung email (HTML)
    const mailOptions = {
      from: `"Admin NewLink Investment" <${process.env.GMAIL_USERNAME}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Khách Cần Tư Vấn: ${project} - ${fullName}`,
      html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f9; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e0e0e0;">
              <h2 style="color: #333; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Thông Tin Khách Hàng</h2>
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Họ và Tên:</strong> ${fullName}</p>
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Số Điện Thoại:</strong> ${phone}</p>
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <p style="color: #777; font-size: 14px;">Email này được gửi từ hệ thống tự động. Vui lòng không trả lời trực tiếp.</p>
            </div>
          </div>
        `,
    };

    // Gửi email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email gửi thành công!",
    });
  } catch (error) {
    console.error("Lỗi gửi email:", error);
    return NextResponse.json(
      { success: false, message: "Lỗi gửi email" },
      { status: 500 }
    );
  }
}
