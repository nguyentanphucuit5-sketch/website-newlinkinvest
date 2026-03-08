import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema(
  {
    ip: { type: String, required: true },
    userAgent: { type: String }, // Trình duyệt của user
    url: { type: String }, // Trang được truy cập
    time: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.models.Visit || mongoose.model("Visit", VisitSchema);
