import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Lấy dữ liệu từ body của request
    const { project, fullName, phone, email, products, budget, wantLoan } = await request.json();

    // Cấu hình Nodemailer với Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email cho Admin
    const adminMailOptions = {
      from: `"Admin NewLink Investment" <${process.env.GMAIL_USERNAME}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Khách Cần Tư Vấn: ${project} - ${fullName}`,
      html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f9; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e0e0e0;">
              <h2 style="color: #333; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #004849; padding-bottom: 10px;">Thông Tin Khách Hàng - ${project}</h2>
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Họ và Tên:</strong> ${fullName}</p>
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Số Điện Thoại:</strong> ${phone}</p>
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Email:</strong> ${email}</p>
              <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Sản phẩm quan tâm:</strong> ${products && products.length > 0 ? products.join(", ") : "Chưa chọn"}</p>
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Khả năng tài chính:</strong> ${budget || "Chưa chọn"}</p>
              <p style="color: #555; font-size: 16px; margin: 10px 0;"><strong style="color: #333;">Mong muốn vay:</strong> ${wantLoan || "Chưa chọn"}</p>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <p style="color: #777; font-size: 14px;">Email này được gửi từ hệ thống tự động. Vui lòng không trả lời trực tiếp.</p>
            </div>
          </div>
        `,
    };

    // Email xác nhận cho Khách hàng
    const customerMailOptions = {
      from: `"NewLink Investment" <${process.env.GMAIL_USERNAME}>`,
      to: email,
      subject: `Cảm ơn bạn đã quan tâm đến ${project} - NewLink Investment`,
      html: `
          <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f9; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <div style="background-color: #004849; padding: 20px 30px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: #fff; font-size: 22px; margin: 0;">NewLink Investment</h1>
            </div>
            <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e0e0e0; border-top: none;">
              <h2 style="color: #004849; font-size: 20px; margin-bottom: 15px;">Xin chào ${fullName},</h2>
              <p style="color: #555; font-size: 15px; line-height: 1.6; margin: 10px 0;">
                Cảm ơn bạn đã quan tâm đến dự án <strong>${project}</strong>. Chúng tôi đã nhận được thông tin của bạn.
              </p>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; border: 1px solid #e0e0e0;">
                <h3 style="color: #004849; font-size: 16px; margin: 0 0 12px 0;">Thông tin đã đăng ký:</h3>
                <p style="color: #555; font-size: 14px; margin: 6px 0;"><strong>Họ và Tên:</strong> ${fullName}</p>
                <p style="color: #555; font-size: 14px; margin: 6px 0;"><strong>Số Điện Thoại:</strong> ${phone}</p>
                <p style="color: #555; font-size: 14px; margin: 6px 0;"><strong>Email:</strong> ${email}</p>
                <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 12px 0;" />
                <p style="color: #555; font-size: 14px; margin: 6px 0;"><strong>Sản phẩm quan tâm:</strong> ${products && products.length > 0 ? products.join(", ") : "Chưa chọn"}</p>
                <p style="color: #555; font-size: 14px; margin: 6px 0;"><strong>Khả năng tài chính:</strong> ${budget || "Chưa chọn"}</p>
                <p style="color: #555; font-size: 14px; margin: 6px 0;"><strong>Mong muốn vay:</strong> ${wantLoan || "Chưa chọn"}</p>
              </div>
              <p style="color: #004849; font-size: 15px; line-height: 1.6; font-weight: bold; margin: 20px 0;">
                Bộ phận kinh doanh sẽ sớm liên hệ với bạn.
              </p>
              <p style="color: #555; font-size: 15px; margin-top: 20px;">Trân trọng,<br/><strong style="color: #004849;">Đội ngũ NewLink Investment</strong></p>
            </div>
          </div>
        `,
    };
    // Gửi dữ liệu qua Google Form
    const submitGoogleForm = async () => {
      const formBody = new URLSearchParams();
      formBody.append("entry.1274976448", fullName);
      formBody.append("entry.678427245", phone);
      formBody.append("entry.1012614632", email);
      formBody.append("entry.515860397", products && products.length > 0 ? products.join(", ") : "");
      formBody.append("entry.1606974466", budget || "");
      formBody.append("entry.1578171578", wantLoan || "");
      formBody.append("entry.1504059943", project || "");

      await fetch("https://docs.google.com/forms/d/e/1FAIpQLScCWpSJycO0sB0P7emJjXwy0Kk74JKDa0d2Bp4PAI0YNjI_wA/formResponse", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      }).catch((err) => console.error("Google Form submit error:", err));
    };

    // Gửi email + Google Form song song
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions),
      submitGoogleForm(),
    ]);

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
