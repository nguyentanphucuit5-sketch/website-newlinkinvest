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

const UserInfoSocial = () => {
  const { social } = useSelector((state) => state.auth.profileUser);

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
        {social?.map((item, index) => {
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInfoSocial;
