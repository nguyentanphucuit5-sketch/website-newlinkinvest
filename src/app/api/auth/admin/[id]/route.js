import { auth } from "@/auth";
import connectDB from "@/lib/Mongo/database";
import { User } from "@/model/User";
import { NextResponse } from "next/server";


// Xóa tài khoản mềm (Chỉ Admin mới có quyền này)
export async function DELETE(req, { params }) {
  try {
    // Kiểm tra quyền truy cập
    const session = await auth();
    if (!session || session?.user.role !== "admin") {
      return NextResponse.json(
        { message: "Bạn không có quyền thực hiện hành động này" },
        { status: 403 }
      );
    }

    await connectDB();
    const { id } = await params;
    const { action } = await req.json();

    // kiểm tra action
    if (!["delete", "restore"].includes(action)) {
      return NextResponse.json(
        {
          message: "Hành động không hợp lệ. Chỉ hỗ trợ 'delete' hoặc 'restore'",
        },
        { status: 400 }
      );
    }

    // Check user trong database
    const user = await User.findById(id).select("isDeleted");
    if (!user) {
      return NextResponse.json(
        { message: "Không tìm thấy người dùng" },
        { status: 404 }
      );
    }

    // Kiểm tra thông tin tài khoản
    if (action === "delete" && user.isDeleted) {
      return NextResponse.json(
        { message: "Tài khoản đã bị xóa mềm trước đó" },
        { status: 400 }
      );
    }
    if (action === "restore" && !user.isDeleted) {
      return NextResponse.json(
        { message: "Tài khoản chưa bị xóa mềm" },
        { status: 400 }
      );
    }

    // Prepare update data
    const updateData =
      action === "delete"
        ? { isDeleted: true, deletedAt: new Date() }
        : { isDeleted: false, deletedAt: null };

    // Update user
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      select: "-password",
    });

    // Double-check update success
    if (!updatedUser) {
      return NextResponse.json(
        { message: "Cập nhật người dùng thất bại" },
        { status: 500 }
      );
    }

    // Success message
    const message =
      action === "delete"
        ? "Đã xóa mềm - Tài khoản sẽ xóa sau 1 ngày"
        : "Đã khôi phục tài khoản thành công";

    return NextResponse.json({ message, user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error("Thao tác người dùng thất bại:", error);
    return NextResponse.json(
      { message: "Thao tác người dùng thất bại", error: error.message },
      { status: 500 }
    );
  }
}
