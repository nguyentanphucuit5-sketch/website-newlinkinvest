"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import AvaProfile from "@/assets/images/AvataProfile.jpg";
import useImageUploading from "@/hooks/Image/useImageUploading";
import useImageDelete from "@/hooks/Image/useImageDelete";
import { useSelector } from "react-redux";
import { useUpdateAccountMutation } from "@/redux/api/authSlice";
import useProfile from "@/hooks/Dashboard/Account/useProfile";
import { toast } from "react-toastify";

const ProfilePopupChangeAvatar = ({ open, setOpen }) => {
  // State
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Redux
  const { image } = useSelector((state) => state.auth.profile);
  const { user } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateAccountMutation();

  // Hook
  const { uploadImages, isUploading } = useImageUploading();
  const { deleteImages, isDelete } = useImageDelete();
  const { profileRefetch } = useProfile(user.id);

  // Action
  useEffect(() => {
    if (image) {
      setPreviewUrl(image?.url);
    }
  }, [image, user]);

  //Thay đổi hình ảnh
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  // Nút cập nhật hình ảnh
  const handleAvatarSubmit = async () => {
    if (selectedFile) {
      try {
        const urls = await uploadImages(selectedFile); // Gửi files để upload

        if (urls.length > 0) {
          await deleteImages(image._id); // Xoá ảnh cũ nếu có
          const res = await updateProfile({
            data: {
              image: urls[0],
            },
            id: user.id,
          }).unwrap();
          if (res) {
            toast.success(`${res.message}`);
            profileRefetch();
            setOpen(false);
            setSelectedFile(null);
          }
        }
      } catch (error) {
        console.log("Lỗi upload ảnh:", error.message);
      }
    }
  };

  // sẽ reset về mặc định mỗi khi mở popup
  useEffect(() => {
    setSelectedFile(null);
  }, [open]);

  // Clean up preview URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="relative group p-1 border rounded-full bg-white w-fit shadow-sm hover:shadow-md transition">
          <Image
            src={image?.url || AvaProfile}
            alt="Avatar Profile"
            className="object-cover w-20 h-20 rounded-full border cursor-pointer"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 cursor-pointer flex items-center justify-center bg-black/50 rounded-full text-white text-sm font-medium hidden group-hover:flex">
            Đổi Ảnh
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-6 bg-white text-black">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">
            Thay đổi ảnh đại diện
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative w-32 h-32">
              <Image
                src={previewUrl || AvaProfile}
                alt="Avatar Preview"
                width={128}
                height={128}
                className="object-cover w-full h-full rounded-full border-2 border-gray-200 shadow-sm"
              />
              <div className="absolute inset-0 rounded-full ring-2 ring-offset-2 ring-gray-100" />
            </div>
          </div>
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              className="px-4 py-2 text-gray-700 bg-white hover:bg-gray-100"
              onClick={() => {
                setOpenChangeAvatar(false);
                setSelectedFile(null);
                setPreviewUrl(null);
              }}
            >
              Hủy
            </Button>
            <Button
              onClick={handleAvatarSubmit}
              disabled={!selectedFile}
              className="px-4 py-2 bg-black"
            >
              {isUploading || isDelete ? "Đang cập nhật..." : "Cập nhật"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfilePopupChangeAvatar;
