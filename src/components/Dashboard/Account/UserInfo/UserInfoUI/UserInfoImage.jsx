"use client";

import React from "react";
import Image from "next/image";

import { useSelector } from "react-redux";

const UserInfoImage = () => {
  // Redux
  const { background } = useSelector((state) => state.auth.profileUser);
  const { image } = useSelector((state) => state.auth.profileUser);

  return (
    <div className="w-full h-full bg-[#F7F7F7] border rounded-xl overflow-hidden shadow-sm">
      {/* Background */}
      <div className="relative w-full h-[140px] border-b">
        <Image
          src={
            background?.url || "/api/image/1748334854388-BackgroundProfile.png"
          }
          width={1000}
          height={1000}
          alt="Hình Nền Hồ Sơ"
          priority
          className="object-cover w-full h-[140px]"
        />

        <div className="absolute -bottom-10 left-2">
          <div className="relative group p-1 border rounded-full bg-white w-fit shadow-sm hover:shadow-md transition">
            <Image
              src={image?.url || "/api/image/1748334854382-AvataProfile.jpg"}
              alt="Avatar Profile"
              className="object-cover w-20 h-20 rounded-full border "
              priority
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      {/* Other Popups */}
      <div className="h-[60px] "></div>
    </div>
  );
};

export default UserInfoImage;
