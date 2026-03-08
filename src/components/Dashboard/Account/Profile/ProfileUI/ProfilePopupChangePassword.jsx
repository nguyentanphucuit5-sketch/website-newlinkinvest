import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useChangePasswordMutation } from "@/redux/api/authSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProfilePopupChangePassword = ({ open, setOpen }) => {
  // State
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Redux
  const [changePassword] = useChangePasswordMutation();
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    // Reset lỗi trước
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Mật khẩu mới và nhập lại mật khẩu không khớp.");
      return;
    }

    try {
      const res = await changePassword({
        oldPassword,
        newPassword,
        _id: user.id,
      }).unwrap();
      if (res) {
        // Hiển thị thông báo thành công
        toast.success(res.message);
      }
    } catch (err) {
      if (err.data?.message) {
        setError(err.data.message);
      } else {
        setError("Đã xảy ra lỗi khi đổi mật khẩu. Vui lòng thử lại.");
      }
      return;
    }

    // TODO: Gửi yêu cầu đổi mật khẩu ở đây (API call)
    console.log("Mật khẩu cũ:", oldPassword);
    console.log("Mật khẩu mới:", newPassword);

    // Đóng dialog sau khi xử lý
    setOpen(false);

    // Reset form
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="h-[60px] bg-white pb-2 px-4 flex justify-end items-end">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="border px-4 py-1 cursor-pointer hover:bg-gray-700 transition">
            Đổi mật khẩu
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px] bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-center">Đổi mật khẩu</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-2">
              <Label htmlFor="oldPassword">Mật khẩu cũ</Label>
              <Input
                type="password"
                id="oldPassword"
                placeholder="**********"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="newPassword">Mật khẩu mới</Label>
              <Input
                type="password"
                id="newPassword"
                placeholder="**********"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Nhập lại mật khẩu</Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="**********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && (
              <p className="text-center text-red-500 text-sm">{error}</p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>
              Xác nhận
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfilePopupChangePassword;
