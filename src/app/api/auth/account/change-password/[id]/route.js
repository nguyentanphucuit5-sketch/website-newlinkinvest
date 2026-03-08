import connectDB from "@/lib/Mongo/database";
import { User } from "@/model/User";
import { NextResponse } from "next/server";
import { compare, hash } from "bcryptjs";
import { auth } from "@/auth";

// Đổi mật khẩu tài khoản người dùng với xác minh mật khẩu cũ
export async function PATCH(req, { params }) {
  try {
    const { id } = await params;

    // Check quyền truy cập
    const session = await auth();
    if (!session || session?.user.id !== id) {
      return NextResponse.json(
        { message: "Bạn không có quyền thực hiện hành động này" },
        { status: 403 }
      );
    }

    await connectDB();
    const { oldPassword, newPassword } = await req.json();

    // Tìm người dùng theo ID
    const user = await User.findById(id);
    console.log("User found:", user);

    if (!user) {
      return NextResponse.json(
        { message: "Không tìm thấy người dùng" },
        { status: 404 }
      );
    }

    // Kiểm tra mật khẩu cũ
    const isPasswordValid = await compare(oldPassword, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Mật khẩu cũ không đúng" },
        { status: 401 }
      );
    }

    // Hash mật khẩu mới
    const hashedPassword = await hash(newPassword, 10);

    // Cập nhật mật khẩu
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { password: hashedPassword },
      { new: true, select: "-password" }
    );

    // Trả về thông tin người dùng
    return NextResponse.json(
      { message: "Đổi mật khẩu thành công", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lỗi khi đổi mật khẩu:", error);
    return NextResponse.json(
      { message: "Lỗi máy chủ khi đổi mật khẩu" },
      { status: 500 }
    );
  }
}
