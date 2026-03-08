"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useProfile from "@/hooks/Dashboard/Account/useProfile";
import { useUpdateAccountMutation } from "@/redux/api/authSlice";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProfileInfo = () => {
  // State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const debounceNameTimeout = useRef(null);
  const debouncePhoneTimeout = useRef(null);

  // Redux
  const { profile } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateAccountMutation();

  //Hook
  const { profileRefetch } = useProfile(user.id);

  //Action
  useEffect(() => {
    if (profile) {
      setName(profile.fullName);
      setPhone(profile.phone);
      setRole(
        profile.role === "admin"
          ? "Quản Trị Viên"
          : profile.role === "manager"
          ? "Quản Lý"
          : "Người Dùng"
      );
    }
  }, [profile]);

  const fullNameHandleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setName(value);

    if (debounceNameTimeout.current) {
      clearTimeout(debounceNameTimeout.current);
    }

    debounceNameTimeout.current = setTimeout(async () => {
      try {
        const res = await updateProfile({
          data: {
            fullName: value,
          },
          id: user.id,
        }).unwrap();
        if (res) {
          toast.success(`${res.message}`);
          profileRefetch();
        }
      } catch (err) {
        console.error("Cập nhật địa chỉ thất bại:", err);
      }
    }, 2000); // 3 giây
  };

  const phoneHandleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setPhone(value);

    if (debouncePhoneTimeout.current) {
      clearTimeout(debouncePhoneTimeout.current);
    }

    debouncePhoneTimeout.current = setTimeout(async () => {
      try {
        const res = await updateProfile({
          data: {
            phone: value,
          },
          id: user.id,
        }).unwrap();
        if (res) {
          toast.success(`${res.message}`);
          profileRefetch();
        }
      } catch (err) {
        console.error("Cập nhật địa chỉ thất bại:", err);
      }
    }, 2000); // 3 giây
  };
  return (
    <div className="w-full h-full p-4 bg-[#F7F7F7] border rounded-xl overflow-hidden">
      <h2 className="font-bold">Thông Tin Tài Khoản</h2>
      <form className="mt-2 space-y-3">
        <div className="space-y-1">
          <Label className={`text-gray-400 text-[13px]`}>Họ và Tên</Label>
          <Input
            type={`text`}
            value={name || ""}
            onChange={fullNameHandleChange}
            className={`bg-white`}
          />
        </div>

        <div className="space-y-1">
          <Label className={`text-gray-400 text-[13px]`}>Số Điện Thoại</Label>
          <Input
            type={`text`}
            value={phone || ""}
            onChange={phoneHandleChange}
            className={`bg-white`}
          />
        </div>
        <div className="space-y-1">
          <Label className={`text-gray-400 text-[13px]`}>Địa Chỉ Email</Label>
          <Input
            type={`text`}
            defaultValue={profile.email || ""}
            disabled
            className={`bg-white `}
          />
        </div>
        <div className="space-y-1">
          <Label className={`text-gray-400 text-[13px]`}>Vai trò</Label>
          <Input
            type={`text`}
            defaultValue={role || ""}
            disabled
            className={`bg-white`}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;
