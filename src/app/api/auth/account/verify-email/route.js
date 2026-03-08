import { User } from "@/model/User";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { token } = await req.json();

    console.log("Token xác minh:", token);

    if (!token) {
      return NextResponse.json({ message: "Thiếu token" }, { status: 400 });
    }

    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    const email = decoded.email;

    // Lấy user từ DB theo email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Người dùng không tồn tại." },
        { status: 404 }
      );
    }

    user.emailVerified = true;
    await user.save();

    return NextResponse.json(
      { message: `Email ${email} đã được xác minh thành công.` },
      { status: 200 }
    );
  } catch (err) {
    console.error("Xác minh thất bại:", err);
    return NextResponse.json(
      { message: "Token không hợp lệ hoặc đã hết hạn." },
      { status: 400 }
    );
  }
}
