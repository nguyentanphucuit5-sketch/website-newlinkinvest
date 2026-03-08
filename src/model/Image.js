import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Image =
  mongoose.models?.Image || mongoose.model("Image", imageSchema);
