import { NextResponse } from "next/server";
import { checkPermission } from "@/lib/Auth/checkPermission";
import connectDB from "@/lib/Mongo/database";
import CateBlog from "@/model/CateBlog";

export async function POST(req) {
  //Kiểm tra quyền truy cập
  const { authorized, response, session } = await checkPermission([
    "admin",
    "manager",
  ]);

  if (!authorized) return response;

  try {
    await connectDB(); // Kết nối MongoDB

    const body = await req.json();
    const dataArray = Array.isArray(body) ? body : [body]; // Đảm bảo luôn là mảng

    const createdItems = [];

    // Tạo theo mảng dữ liệu
    for (const item of dataArray) {
      const { name, slug, description, status } = item;

      if (!name || !slug) {
        return NextResponse.json(
          { message: "Mỗi object phải có name và slug" },
          { status: 400 }
        );
      }

      const existing = await CateBlog.findOne({ slug });
      if (existing) {
        return NextResponse.json(
          { message: `Slug '${slug}' đã tồn tại` },
          { status: 409 }
        );
      }

      const newCate = await CateBlog.create({
        name,
        slug,
        description,
        status: status ?? true,
      });

      createdItems.push(newCate);
    }

    return NextResponse.json(
      createdItems.length === 1 ? createdItems[0] : createdItems,
      { status: 201 }
    );
  } catch (error) {
    console.error("Lỗi tạo CateBlog:", error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}

export async function GET() {
  await connectDB(); // Kết nối đến MongoDB

  try {
    await connectDB();
    const cateBlog = await CateBlog.find(); // Lấy tất cả sản phẩm từ database
    return NextResponse.json(
      { message: "Lấy Dữ Liệu Thành Công", data: cateBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lấy Dữ Liệu Không Thành Công:", error);
    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
