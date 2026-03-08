import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  bio: { type: String, default: "" },
  role: { type: String },
  image: {
    title: { type: String },
    url: { type: String },
    _id: { type: String },
  },
});

export const Staff =
  mongoose.models?.Staff || mongoose.model("Staff", staffSchema);
