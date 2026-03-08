import ManagerComponent from "@/components/Dashboard/Account/Manager/ManagerComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const AccountManagerPage = () => {
  return (
    <div>
      <HeaderSideBar
        title="Tài Khoản Quản Lý"
        showButton={true}
        titleButton={`Tạo Tài Khoản`}
        linkButton={`/dashboard/account/manager/register`}
      />
      <div className="p-6 ">
        <ManagerComponent />
      </div>
    </div>
  );
};

export default AccountManagerPage;
