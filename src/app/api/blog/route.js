import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { checkPermission } from "@/lib/Auth/checkPermission";
import connectDB from "@/lib/Mongo/database";
import { Blog } from "@/model/Blog";

// Thêm mới bài viết (Chỉ Admin và Manager mới có quyền này)
export async function POST(req) {
  const { authorized, response, session } = await checkPermission([
    "admin",
    "manager",
  ]);

  if (!authorized) return response;

  try {
    await connectDB();
    const {
      title,
      slug,
      metaDescription,
      content,
      image,
      category,
      tags,
      author,
      canonicalUrl,
    } = await req.json();

    console.log(
      title,
      slug,
      metaDescription,
      content,
      image,
      category,
      tags,
      author,
      canonicalUrl
    );

    // Xác thực dữ liệu đầu vào
    if (
      !title ||
      !slug ||
      !metaDescription ||
      !content ||
      !image ||
      !category ||
      !author ||
      !tags ||
      !canonicalUrl
    ) {
      return NextResponse.json(
        { message: "Nhập Thiếu Dữ liệu" },
        { status: 400 }
      );
    }

    // Kiểm tra ObjectId
    if (!mongoose.Types.ObjectId.isValid(category.value)) {
      return NextResponse.json(
        { message: "Thiếu Loại Bài Viết" },
        { status: 400 }
      );
    }

    // Kiểm tra slug đã tồn tại chưa
    const existing = await Blog.findOne({ slug });
    if (existing) {
      return NextResponse.json(
        {
          message:
            "Đường dẫn rút gọn đã tồn tại. Vui lòng chọn đường dẫn khác.",
        },
        { status: 400 }
      );
    }

    // Tạo blog mới
    const blog = new Blog({
      title,
      slug,
      metaDescription,
      content,
      image,
      category,
      tags,
      author,
      canonicalUrl: canonicalUrl || undefined,
    });

    await blog.save();

    return NextResponse.json(
      {
        message: "Tạo bài viết thành công",
        data: {
          _id: blog._id,
          title: blog.title,
          slug: blog.slug,
          publishDate: blog.publishDate,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      {
        message: "Đã xảy ra lỗi khi tạo bài viết xin thử lại",
      },
      { status: error.name === "ValidationError" ? 400 : 500 }
    );
  }
}

// Lấy toàn bộ danh sách bài viết
export async function GET(req) {
  try {
    await connectDB();

    const data = await Blog.find();

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      {
        message: "Error fetching blogs",
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
