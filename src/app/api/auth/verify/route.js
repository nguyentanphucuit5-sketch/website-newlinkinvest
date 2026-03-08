// src/app/api/auth/verify/route.js
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
// đường dẫn tương đối từ route.js ra thư mục mongodb ở root project
import users from "../../../../../mongodb/newlinkinvest.users.json";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // tìm user theo email trong file JSON (bỏ những user bị xoá nếu có isDeleted)
    const user = users.find((u) => u.email === email && !u.isDeleted);

    if (!user) {
      return NextResponse.json(
        { message: "Email hoặc mật khẩu không đúng" },
        { status: 401 }
      );
    }

    // so sánh mật khẩu (plain text) với hash bcrypt trong JSON
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        { message: "Email hoặc mật khẩu không đúng" },
        { status: 401 }
      );
    }

    // không trả về password cho client
    const { password: _pw, ...safeUser } = user;

    return NextResponse.json(
      {
        id: safeUser._id?.$oid ?? safeUser._id ?? "",
        fullName: safeUser.fullName,
        email: safeUser.email,
        role: safeUser.role,
        verify: safeUser.emailVerified,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Đăng nhập xảy ra lỗi:", error);
    return NextResponse.json(
      { message: "Lỗi server" },
      { status: 500 }
    );
  }
}