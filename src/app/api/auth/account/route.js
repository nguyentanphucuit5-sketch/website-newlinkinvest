import { NextResponse } from "next/server";
import connectDB from "@/lib/Mongo/database";
import { User } from "@/model/User";
import { hash } from "bcryptjs";

// Register cho tài khoản người dùng user
export async function POST(req) {
  try {
    // Kết nối Database
    await connectDB();

    // Lấy dữ liệu từ request
    const { email, password, fullName } = await req.json();

    // Kiểm tra người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    // Mã hóa mật khẩu
    const hashedPassword = await hash(password, 10);

    // Tạo người dùng mới
    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName,
    });

    // Trả thông tin người dùng về client
    return NextResponse.json(
      {
        id: newUser._id.toString(),
        email: newUser.email,
        fullName: newUser.fullName,
        role: newUser.role,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Đăng ký thất bại:", error);
    return NextResponse.json({ message: "Đăng ký thất bại" }, { status: 500 });
  }
}
