"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useProfile from "@/hooks/Dashboard/Account/useProfile";
import { useUpdateAccountMutation } from "@/redux/api/authSlice";
import React, { useEffect, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProfileIndustry = () => {
  //State
  const [skills, setSkills] = useState();
  const [newSkill, setNewSkill] = useState("");
  const [showInput, setShowInput] = useState(false);

  //Redux
  const { profile } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateAccountMutation();

  //Hook
  const { profileRefetch } = useProfile(user.id);

  //Action
  useEffect(() => {
    if (profile?.skill) {
      setSkills(profile.skill);
    }
  }, [profile]);

  // Thêm Skill Mới
  const handleAddSkill = async () => {
    if (newSkill.trim() !== "") {
      const skillFilter = [...skills, newSkill.trim()];
      setSkills(skillFilter);

      try {
        const res = await updateProfile({
          data: {
            skill: skillFilter,
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
      setNewSkill(""); // Clear input after adding
      setShowInput(false); // Hide input after adding
    }
  };

  // Hiển thị input khi nhấn
  const handleToggleInput = () => {
    setShowInput(true); // Show input when button is clicked
  };

  // Xóa Skill
  const handleDeleteSkill = async (indexToDelete) => {
    const skillFilter = skills.filter((_, index) => index !== indexToDelete);
    setSkills(skillFilter);

    try {
      const res = await updateProfile({
        data: {
          skill: skillFilter,
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
  };

  return (
    <div className="w-full h-full p-4 bg-[#F7F7F7] border rounded-xl overflow-hidden">
      <h2 className="font-bold">Kỹ Năng</h2>
      <div className="mt-2 w-full flex gap-3 flex-wrap">
        {skills?.map((item, index) => (
          <div
            key={index}
            className="py-1 rounded-2xl px-4 text-[12px] text-white bg-black flex items-center"
          >
            <span>{item}</span>

            <span
              className="pl-2 cursor-pointer"
              onClick={() => handleDeleteSkill(index)}
            >
              <TiDelete size={16} />
            </span>
          </div>
        ))}
      </div>

      {showInput ? (
        <div className="mt-5 flex gap-2 items-center">
          <Input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Nhập kỹ năng mới"
            className="w-full p-2 border rounded-lg text-black bg-white"
            autoFocus
          />
          <Button
            onClick={handleAddSkill}
            className="bg-white text-black hover:bg-black hover:text-white"
          >
            + Thêm
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleToggleInput}
          className="w-full mt-5 bg-white text-black hover:bg-black hover:text-white"
        >
          + Thêm Mới
        </Button>
      )}
    </div>
  );
};

export default ProfileIndustry;
