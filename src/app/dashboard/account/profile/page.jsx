import ProfileComponent from "@/components/Dashboard/Account/Profile/ProfileComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const ProfilePage = async () => {
  return (
    <div>
      <HeaderSideBar title="Thông Tin Cá Nhân" />
      <div className="p-6 ">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default ProfilePage;
