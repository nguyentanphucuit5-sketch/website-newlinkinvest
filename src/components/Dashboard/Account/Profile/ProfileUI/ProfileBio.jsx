"use client";
import { Textarea } from "@/components/ui/textarea";
import useProfile from "@/hooks/Dashboard/Account/useProfile";
import { useUpdateAccountMutation } from "@/redux/api/authSlice";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProfileBio = () => {
  //State
  const [bio, setBio] = useState("");
  const debounceTimeout = useRef(null);

  //Redux
  const { profile } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateAccountMutation();

  //Hook
  const { profileRefetch } = useProfile(user.id);

  //Action
  useEffect(() => {
    if (profile?.bio) {
      setBio(profile.bio);
    }
  }, [profile]);

  const handleChange = (e) => {
    const value = e.target.value;
    setBio(value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await updateProfile({
          data: {
            bio: value,
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
    }, 3000); // 3 giây
  };

  return (
    <div className="w-full h-full p-4 bg-[#F7F7F7] border rounded-xl overflow-hidden">
      <h2 className="font-bold">Giới Thiệu Bản Thân</h2>
      <div className="mt-2 space-y-1">
        <Textarea
          value={bio || ""} // set giá trị từ state
          onChange={handleChange}
          className={`bg-white h-[100px]`}
          placeholder="Nhập giới thiệu bản thân..."
        />
      </div>
    </div>
  );
};

export default ProfileBio;
