"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useProfile from "@/hooks/Dashboard/Account/useProfile";
import { socialIconMap } from "@/lib/DataUI/SocialData";
import { useUpdateAccountMutation } from "@/redux/api/authSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";
import { FaPaste } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProfileSocial = () => {
  // State
  const [social, setSocial] = useState([]);
  const [newSocial, setNewSocial] = useState("");
  const [showInput, setShowInput] = useState(false);

  //Redux
  const { profile } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const [updateProfile] = useUpdateAccountMutation();

  //Hook
  const { profileRefetch } = useProfile(user.id);

  //Action
  useEffect(() => {
    if (profile?.social) {
      setSocial(profile.social);
    }
  }, [profile]);

  // Action
  const handleToggleInput = () => setShowInput(!showInput);

  const handleAddSocial = async () => {
    if (newSocial.trim() !== "") {
      const socialFilter = [...social, newSocial.trim()];
      setSocial(socialFilter);

      try {
        const res = await updateProfile({
          data: {
            social: socialFilter,
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
      setNewSocial(""); // Clear input after adding
      setShowInput(false); // Hide input after adding
    }
  };
  const handleDeleteSocial = async (indexToDelete) => {
    const socialFilter = social.filter((_, index) => index !== indexToDelete);
    setSocial(socialFilter);

    try {
      const res = await updateProfile({
        data: {
          social: socialFilter,
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

  const getSocialIcon = (url) => {
    const found = socialIconMap.find((item) =>
      url.toLowerCase().includes(item.keyword)
    );
    return found ? found.icon : <FaGlobe size={20} />;
  };

  return (
    <div className="w-full h-full p-4 bg-[#F7F7F7] border rounded-xl overflow-hidden">
      <h2 className="font-bold">Phương tiện truyền thông</h2>

      <div className="mt-2 flex flex-col gap-4">
        {social.map((item, index) => {
          return (
            <div
              key={index}
              className="border bg-white w-full p-2 flex items-center gap-4 rounded-lg hover:bg-gray-50 relative"
            >
              <Link href={item} target="_blank" rel="noopener noreferrer">
                {getSocialIcon(item)}
              </Link>
              <Link
                href={item}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full truncate overflow-hidden whitespace-nowrap max-w-[350px]" // hoặc bạn tự điều chỉnh max-w
              >
                {item}
              </Link>
              <div
                className="absolute right-2 z-20 "
                onClick={() => handleDeleteSocial(index)}
              >
                <FaDeleteLeft size={20} className="hover:text-red-600" />
              </div>
            </div>
          );
        })}
      </div>

      {showInput ? (
        <div className="mt-5 flex gap-2 items-center">
          <div className="relative w-full">
            <Input
              type="text"
              value={newSocial}
              onChange={(e) => setNewSocial(e.target.value)}
              placeholder="Copy Đường dẫn vào đây"
              className="w-full p-2 pr-16 border rounded-lg text-black bg-white"
              autoFocus
            />
            <button
              onClick={async () => {
                const text = await navigator.clipboard.readText();
                setNewSocial(text);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 text-black px-4 py-1.5 rounded-md hover:bg-gray-300 text-sm"
            >
              <FaPaste />
            </button>
          </div>
          <Button
            onClick={handleAddSocial}
            className="bg-white text-black hover:bg-black hover:text-white"
          >
            + Thêm
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleToggleInput}
          className="w-full mt-5 bg-white text-black hover:bg-black hover:text-white cursor-pointer"
        >
          + Thêm Mới
        </Button>
      )}
    </div>
  );
};

export default ProfileSocial;
