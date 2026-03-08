import mongoose from "mongoose";

const pdfSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Pdf =
  mongoose.models?.Pdf || mongoose.model("Pdf", pdfSchema);
