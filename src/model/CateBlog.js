import mongoose from "mongoose";

const CateBlogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      default: "",
    },
    status: {
      type: Boolean,
      default: true, // true = hiển thị, false = ẩn
    },
  },
  {
    timestamps: true, // tự động tạo createdAt và updatedAt
  }
);

// Tránh lỗi khi dùng model nhiều lần trong dev mode (Next.js hot reload)
export default mongoose.models.CateBlog ||
  mongoose.model("CateBlog", CateBlogSchema);
