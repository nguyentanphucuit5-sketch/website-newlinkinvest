"use client";

import React, { useState } from "react";
import BgProfile from "@/assets/images/BackgroundProfile.png";
import Image from "next/image";

import ProfilePopupChangePassword from "./ProfilePopupChangePassword";
import ProfilePopupChangeAvatar from "./ProfilePopupChangeAvatar";

import ProfilePopupChangeBackground from "./ProfilePopupChangeBackground";
import { useSelector } from "react-redux";

const ProfileImage = () => {
  // State
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openChangeAvatar, setOpenChangeAvatar] = useState(false);
  const [openChangeBackground, setOpenChangeBackground] = useState(false);

  // Redux
  const { background } = useSelector((state) => state.auth.profile);

  return (
    <div className="w-full h-full bg-[#F7F7F7] border rounded-xl overflow-hidden shadow-sm">
      {/* Background */}
      <div className="relative w-full h-[140px] border-b">
        <Image
          src={background?.url || BgProfile}
          width={1000}
          height={1000}
          alt="Hình Nền Hồ Sơ"
          className="object-cover w-full h-[140px]"
        />
        <div className="absolute top-3 right-3">
          <ProfilePopupChangeBackground
            open={openChangeBackground}
            setOpen={setOpenChangeBackground}
          />
        </div>
        <div className="absolute -bottom-10 left-2">
          <ProfilePopupChangeAvatar
            open={openChangeAvatar}
            setOpen={setOpenChangeAvatar}
          />
        </div>
      </div>

      {/* Other Popups */}
      <ProfilePopupChangePassword
        open={openChangePassword}
        setOpen={setOpenChangePassword}
      />
    </div>
  );
};

export default ProfileImage;
