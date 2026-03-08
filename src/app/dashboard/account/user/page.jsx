import UserComponent from "@/components/Dashboard/Account/User/UserComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const AccountUserPage = () => {
  return (
    <div>
      <HeaderSideBar title="Tài Khoản Khách" />
      <div className="p-6 ">
        <UserComponent />
      </div>
    </div>
  );
};

export default AccountUserPage;
