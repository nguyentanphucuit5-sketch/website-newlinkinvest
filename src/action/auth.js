"use server";

import { signIn } from "@/auth";

const login = async (prevState, formData) => {
  //FormData
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    // Sử dụng Authjs
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    // check kết quả
    if (res) {
      console.log("Đăng nhập thành công:", res);
      return { success: true, redirectTo: "/dashboard" };
    } else {
      console.error("Đăng nhập thất bại:", res?.error);
      return { error: "Tài khoản hoặc mật khẩu không chính xác" };
    }
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    return { error: "Tài khoản hoặc mật khẩu không chính xác" };
  }
};

export { login };
