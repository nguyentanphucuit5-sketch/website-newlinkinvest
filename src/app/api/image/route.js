import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import connectDB from "@/lib/Mongo/database";
import { Image } from "@/model/Image";

export async function POST(req) {
  try {
    await connectDB();

    // Đường dẫn tới thư mục uploads
    const uploadDir = path.join(process.cwd(), "uploads/images");
    await fs.mkdir(uploadDir, { recursive: true });

    const formData = await req.formData();
    const files = formData.getAll("images"); // lấy tất cả ảnh

    const savedImages = [];

    //Vòng lập lưu từng file ảnh
    for (const file of files) {
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      const arrayBuffer = await file.arrayBuffer();
      await fs.writeFile(filePath, Buffer.from(arrayBuffer));

      const newImage = await Image.create({
        title: file.name,
        url: `/api/image/${fileName}`,
      });

      savedImages.push(newImage);
    }

    return NextResponse.json({
      message: "Lưu Hình Ảnh Thành Công",
      data: savedImages,
    });
  } catch (error) {
    console.error("Lỗi khi upload:", error);
    return NextResponse.json(
      { message: "Lỗi server khi upload ảnh" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    await connectDB();

    // Lấy mảng _id từ body
    const { ids } = await req.json();

    console.log(ids);

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { message: "Thiếu hoặc định dạng mảng _id không hợp lệ" },
        { status: 400 }
      );
    }

    const deletedImages = [];
    const uploadDir = path.join(process.cwd(), "uploads/images");

    // Xử lý từng _id trong mảng
    for (const id of ids) {
      // Tìm bản ghi trong MongoDB
      const image = await Image.findById(id);
      if (image) {
        // Xóa file vật lý
        const fileName = image.url.split("/api/image/")[1];
        if (fileName) {
          const filePath = path.join(uploadDir, fileName);
          try {
            await fs.unlink(filePath);
          } catch (error) {
            if (error.code !== "ENOENT") {
              console.error(`Lỗi khi xóa file ${fileName}:`, error.message);
            } else {
              console.warn(`File không tồn tại: ${filePath}`);
            }
          }
        }

        // Xóa bản ghi trong MongoDB
        await Image.findByIdAndDelete(id);
        deletedImages.push(image);
      }
    }

    if (deletedImages.length === 0) {
      return NextResponse.json(
        { message: "Không tìm thấy ảnh nào để xóa" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: `Xóa ${deletedImages.length} ảnh thành công`,
      data: deletedImages,
    });
  } catch (error) {
    console.error("Lỗi khi xóa ảnh:", error);
    return NextResponse.json(
      { message: "Lỗi server khi xóa ảnh" },
      { status: 500 }
    );
  }
}
