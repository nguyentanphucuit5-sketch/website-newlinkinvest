import mongoose from "mongoose";

// Schema cho Blog
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Tiêu đề bài viết là bắt buộc"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "Slug là bắt buộc"],
    },
    metaDescription: {
      type: String,
      required: [true, "Mô tả meta là bắt buộc"],
    },
    content: {
      type: String,
      required: [true, "Nội dung bài viết là bắt buộc"],
    },
    image: {
      type: {
        title: { type: String },
        url: { type: String },
        _id: { type: String },
      },
    },
    category: {
      value: { type: mongoose.Schema.Types.ObjectId, ref: "CateBlog" },
      label: { type: String },
    },
    tags: [
      {
        type: String,
      },
    ],
    author: {
      type: String,
    },
    canonicalUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
