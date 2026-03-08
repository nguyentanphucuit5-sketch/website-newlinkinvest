// src/middleware.js
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function middleware(request) {
 

  const session = await auth(); // Lấy thông tin session của người dùng
  const pathname = request.nextUrl.pathname;

  // Kiểm tra nếu không có session (chưa đăng nhập)
  if (!session?.user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Nếu người dùng chưa xác minh tài khoản
  if (session.user.verify === false) {
    return NextResponse.redirect(new URL("/verify-email", request.url));
  }

  // Chặn riêng /dashboard/account nếu không phải admin
  if (
    pathname === "/dashboard/account/manager" &&
    session.user.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Kiểm tra nếu role không phải là "admin" hoặc "manager"
  if (session.user.role !== "admin" && session.user.role !== "manager") {
    return NextResponse.redirect(new URL("/", request.url)); // Chuyển hướng về trang chủ
  }

  // Nếu đủ điều kiện, cho phép tiếp tục
  return NextResponse.next();
}

// Cấu hình middleware để chỉ áp dụng cho trang /dashboard
export const config = {
  matcher: ["/dashboard/:path*"], // Áp dụng cho /dashboard và các sub-path
};
