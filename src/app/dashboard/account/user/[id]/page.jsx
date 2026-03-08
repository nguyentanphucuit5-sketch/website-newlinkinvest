import UserInfoComponent from "@/components/Dashboard/Account/UserInfo/UserInfoComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const UserInformation = () => {
  return (
    <div>
      <HeaderSideBar title="Thông Tin Khách Hàng" />
      <div className="p-6 ">
        <UserInfoComponent />
      </div>
    </div>
  );
};

export default UserInformation;
