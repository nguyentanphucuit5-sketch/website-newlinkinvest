import React, { useEffect, useState } from "react";
import { IoPencil } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BgProfile from "@/assets/images/BackgroundProfile.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useUpdateAccountMutation } from "@/redux/api/authSlice";
import useImageUploading from "@/hooks/Image/useImageUploading";
import useImageDelete from "@/hooks/Image/useImageDelete";
import useProfile from "@/hooks/Dashboard/Account/useProfile";
import { toast } from "react-toastify";

const ProfilePopupChangeBackground = ({ open, setOpen }) => {
  // State
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Redux
  const { background } = useSelector((state) => state.auth.profile);
  const { user } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateAccountMutation();

  // Hook
  const { uploadImages, isUploading } = useImageUploading();
  const { deleteImages, isDelete } = useImageDelete();
  const { profileRefetch } = useProfile(user.id);

  // Action
  useEffect(() => {
    if (background) {
      setPreviewUrl(background.url);
    }
  }, [background]);

  //Thay đổi hình ảnh
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  // Nút cập nhật hình ảnh
  const handleSubmit = async () => {
    if (selectedFile) {
      try {
        const urls = await uploadImages(selectedFile); // Gửi files để upload

        if (urls.length > 0) {
          await deleteImages(background._id); // Xoá ảnh cũ nếu có
          const res = await updateProfile({
            data: {
              background: urls[0],
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
        <div className="p-2 border rounded-full bg-white cursor-pointer hover:bg-gray-100 transition shadow-sm">
          <IoPencil size={12} />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-800 text-center">
            Thay Đổi Hình Nền
          </DialogTitle>
        </DialogHeader>
        <div className="mt-2 flex flex-col gap-6">
          {/* Form Section */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Image
                src={previewUrl || BgProfile}
                alt="Xem Trước Hình Nền"
                className="w-full h-40 object-cover rounded-md border border-gray-200"
                width={1000}
                height={1000}
              />
            </div>
            <Input
              id="background-upload"
              type="file"
              accept="image/*"
              className="w-full border-gray-300 focus:ring-2 focus:ring-blue-500 text-black"
              onChange={handleFileChange}
            />
            <div className="flex justify-end ">
              <Button
                type="submit"
                disabled={!selectedFile}
                onClick={handleSubmit}
                className=" bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isUploading || isDelete ? "Đang cập nhật..." : "Cập nhật"}
              </Button>
            </div>
          </div>
          {/* Preview Section */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfilePopupChangeBackground;
