import mongoose from "mongoose";

const CateProductSchema = new mongoose.Schema(
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
    image: {
      type: String,
      default: "", // Đường dẫn hoặc URL ảnh danh mục
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
export default mongoose.models.CateProduct ||
  mongoose.model("CateProduct", CateProductSchema);
