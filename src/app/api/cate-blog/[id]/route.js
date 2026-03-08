// src/app/api/auth/verify/route.js
import { checkPermission } from "@/lib/Auth/checkPermission";
import connectDB from "@/lib/Mongo/database";
import CateBlog from "@/model/CateBlog";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // Đảm bảo chạy trong Node.js runtime

// GET: Lấy tất cả sản phẩm
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const cateBlog = await CateBlog.findById(id); // Tìm sản phẩm theo ID

    if (!cateBlog) {
      return NextResponse.json(
        { error: "Không tìm thấy Loại Bài Viết này" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Lấy Dữ Liệu Thành Công", data: cateBlog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Có Vẻ Như có lỗi gì đó rồi" },
      { status: 500 }
    );
  }
}

// PUT: Cập nhật sản phẩm theo ID qua params
export async function PUT(req, { params }) {
  //Kiểm tra quyền truy cập
  const { authorized, response, session } = await checkPermission([
    "admin",
    "manager",
  ]);

  if (!authorized) return response;

  try {
    await connectDB();
    const { id } = await params; // Lấy id từ params
    const body = req.json();

    const { name, slug, description } = await body; // Lấy dữ liệu từ request body

    if (!name || !slug) {
      return NextResponse.json(
        { message: "Name và slug là bắt buộc" },
        { status: 400 }
      );
    }

    // Kiểm tra trùng name hoặc slug với bản ghi khác
    const existing = await CateBlog.findOne({
      _id: { $ne: id }, // loại trừ chính bản ghi đang cập nhật
      $or: [{ name }, { slug }],
    });

    if (existing) {
      return NextResponse.json(
        { message: "Name hoặc Slug đã tồn tại" },
        { status: 409 }
      );
    }

    // Tìm và cập nhật sản phẩm theo ID
    const updatedCateBlog = await CateBlog.findByIdAndUpdate(
      id,
      { name, description, slug },
      { new: true } // Trả về bản cập nhật mới
    );

    if (!updatedCateBlog) {
      return NextResponse.json(
        { error: "Loại Bài Viết không tìm thấy" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Cập Nhật Loại Bài Viết Thành Công", data: updatedCateBlog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Có Vẻ Như có lỗi gì đó rồi" },
      { status: 500 }
    );
  }
}

// DELETE: Xóa sản phẩm theo ID qua params
export async function DELETE(req, { params }) {
  //Kiểm tra quyền truy cập
  const { authorized, response, session } = await checkPermission([
    "admin",
    "manager",
  ]);

  if (!authorized) return response;

  try {
    const { id } = await params; // Lấy id từ params

    // Tìm và xóa sản phẩm theo ID
    const deletedCateBlog = await CateBlog.findByIdAndDelete(id);

    if (!deletedCateBlog) {
      return NextResponse.json(
        { error: "Loại Bài Viết không tìm thấy" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Xóa Loại Bài Viết Thành Công", data: deletedCateBlog },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Có Vẻ Như có lỗi gì đó rồi" },
      { status: 500 }
    );
  }
}
