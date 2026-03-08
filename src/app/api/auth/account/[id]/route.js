import connectDB from "@/lib/Mongo/database";
import { User } from "@/model/User";
import { NextResponse } from "next/server";

// Lấy tài khoản theo id
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    if (!id || id === "undefined" || id === null) {
      return NextResponse.json({
        message: "ID tài khoản không hợp lệ xin hãy thử lại",
      });
    }

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: "Tài khoản không tồn tại" });
    }

    return NextResponse.json(
      { data: user, message: "Tải dữ liệu thành công" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Lỗi khi tải dữ liệu hãy reset lại" });
  }
}

// Cập nhật thông tin tài khoản
export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await req.json();

    // Danh sách các trường được phép cập nhật
    const allowedFields = [
      "fullName",
      "phone",
      "bio",
      "skill",
      "social",
      "background",
      "image",
      "address",
      "street",
    ];

    // Tạo đối tượng chứa các trường được phép cập nhật
    const updateData = {};
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    // Nếu người dùng cố gắng gửi dữ liệu không hợp lệ (ví dụ: password)
    const disallowedFields = Object.keys(body).filter(
      (key) => !allowedFields.includes(key)
    );
    if (disallowedFields.length > 0) {
      return NextResponse.json(
        {
          message: `Không thể cập nhật các trường sau: ${disallowedFields.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    //Update thông tin người dùng
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
      select: "-password",
    });

    //Kiểm tra có người dùng có trong database không
    if (!updatedUser) {
      return NextResponse.json(
        { message: "Không tìm thấy người dùng" },
        { status: 404 }
      );
    }

    //Trả về thông tin người dùng
    return NextResponse.json(
      { data: updatedUser, message: "Cập nhật thay đổi thành công" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Cập nhật người dùng thất bại:", error);
    return NextResponse.json(
      { message: "Cập nhật người dùng thất bại" },
      { status: 500 }
    );
  }
}
