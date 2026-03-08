import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import connectDB from "@/lib/Mongo/database";
import { User } from "@/model/User";

export async function POST(req) {
  try {
    await connectDB();

    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { message: "Thiếu token hoặc mật khẩu mới" },
        { status: 400 }
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.AUTH_SECRET);
    } catch (err) {
      return NextResponse.json(
        { message: "Token không hợp lệ hoặc đã hết hạn" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return NextResponse.json(
        { message: "Không tìm thấy người dùng" },
        { status: 404 }
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return NextResponse.json({ message: "Mật khẩu đã được cập nhật" });
  } catch (err) {
    console.error("Lỗi đặt lại mật khẩu:", err);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
