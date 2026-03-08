import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import connectDB from "@/lib/Mongo/database";
import { Pdf } from "@/model/Pdf";

export async function POST(req) {
  try {
    await connectDB();

    // Đường dẫn tới thư mục uploads/pdfs
    const uploadDir = path.join(process.cwd(), "uploads/pdfs");
    await fs.mkdir(uploadDir, { recursive: true });

    const formData = await req.formData();
    const files = formData.getAll("pdfs"); // tên field trong FormData là "pdfs"

    const maxSize = 2 * 1024 * 1024; // 2MB
    const savedPDFs = [];
    const errors = [];

    for (const file of files) {
      // Kiểm tra định dạng PDF
      if (file.type !== "application/pdf") {
        errors.push(`${file.name} không phải là file PDF.`);
        continue;
      }

      // Kiểm tra dung lượng
      if (file.size > maxSize) {
        errors.push(`${file.name} vượt quá giới hạn 2MB.`);
        continue;
      }

      // Tạo tên file duy nhất và lưu vào thư mục
      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);
      const arrayBuffer = await file.arrayBuffer();

      await fs.writeFile(filePath, Buffer.from(arrayBuffer));

      // Lưu metadata vào database
      const newPDF = await Pdf.create({
        title: file.name,
        url: `/api/pdf/${fileName}`, // Đường dẫn phục vụ file
      });

      savedPDFs.push(newPDF);
    }

    // ✅ Sau khi upload xong, kiểm tra & xóa các file đã quá hạn
    const expirationDays = 30;
    const expirationDate = new Date(
      Date.now() - expirationDays * 24 * 60 * 60 * 1000
    );
    const expiredFiles = await Pdf.find({ createdAt: { $lt: expirationDate } });

    for (const file of expiredFiles) {
      const filePath = path.join(uploadDir, file.url.replace("/api/pdf/", ""));
      try {
        await fs.unlink(filePath); // Xóa file vật lý
      } catch (err) {
        console.warn(`Không thể xóa file ${filePath}:`, err.message);
      }
      await Pdf.findByIdAndDelete(file._id); // Xóa bản ghi DB
    }

    // Nếu không có file nào hợp lệ
    if (savedPDFs.length === 0) {
      return NextResponse.json(
        {
          message: "Không có file nào được upload thành công.",
          errors,
        },
        { status: 400 }
      );
    }

    // Trả về thành công kèm danh sách file và lỗi (nếu có)
    return NextResponse.json({
      message: "Upload PDF thành công.",
      data: savedPDFs,
      errors: errors.length > 0 ? errors : null,
    });
  } catch (error) {
    console.error("Lỗi khi upload PDF:", error);
    return NextResponse.json(
      { message: "Lỗi server khi upload PDF" },
      { status: 500 }
    );
  }
}
