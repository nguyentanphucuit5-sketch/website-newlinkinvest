import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { checkPermission } from "@/lib/Auth/checkPermission";
import connectDB from "@/lib/Mongo/database";
import { Blog } from "@/model/Blog";

// Lấy bài viết theo id
export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    let data;

    if (mongoose.Types.ObjectId.isValid(id)) {
      data = await Blog.findById(id);
    } else {
      data = await Blog.findOne({ slug: id });
    }

    if (!data) {
      return NextResponse.json(
        { message: "Không tìm thấy blog" },
        { status: 404 }
      );
    }

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

// Update bài viết theo id (Chỉ cho quản trị và quản lý)
export async function PATCH(req, { params }) {
  const { authorized, response } = await checkPermission(["admin", "manager"]);

  if (!authorized) return response;
  try {
    await connectDB();
    const { id } = await params;
    const updateFields = await req.json();
    console.log("Update fields:", updateFields.category);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, updateFields, {
      new: true,
      runValidators: true,
    });

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      {
        message: "Error updating blog",
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}

// Xóa bài viết theo id (Chỉ cho quản trị và quản lý)
export async function DELETE(req, { params }) {
  const { authorized, response, session } = await checkPermission([
    "admin",
    "manager",
  ]);

  if (!authorized) return response;
  try {
    await connectDB();
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Blog deleted successfully",
      blog: deletedBlog,
    });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      {
        message: "Error deleting blog",
        error: error.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
