import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req, { params }) {
  const { id } = await params; // không cần `await` vì `params` không phải Promise
  const filePath = path.join(process.cwd(), "uploads/pdfs", id); // sửa thành thư mục pdf

  if (!fs.existsSync(filePath)) {
    return new NextResponse("File not found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  const contentType =
    {
      ".pdf": "application/pdf",
    }[ext] || "application/octet-stream";

  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000",
    },
  });
}
