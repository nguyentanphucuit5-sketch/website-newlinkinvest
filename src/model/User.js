import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  bio: { type: String, default: "" },
  skill: { type: [String], default: "" },
  role: { type: String },
  social: { type: [String] },
  background: {
    title: { type: String },
    url: { type: String },
    _id: { type: String },
  },
  image: {
    title: { type: String },
    url: { type: String },
    _id: { type: String },
  },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date, default: null },
  emailVerified: { type: Boolean, default: false },
  isOnline: { type: Boolean, default: false },
  lastOnlineAt: { type: Date, default: null },
  authProviderId: { type: String },
  address: {
    province: { value: { type: String }, label: { type: String } },
    district: { value: { type: String }, label: { type: String } },
    ward: { value: { type: String }, label: { type: String } },
  },
  street: { type: String, default: "" },
});

userSchema.index({ deletedAt: 1 }, { expireAfterSeconds: 86400 }); // 86400 giây = 1 ngày

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
