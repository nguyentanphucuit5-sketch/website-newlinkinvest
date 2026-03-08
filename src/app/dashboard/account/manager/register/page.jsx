import RegisterManagerComponent from "@/components/Dashboard/Account/RegisterManager/RegisterManagerComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const RegisterManager = () => {
  return (
    <div>
      <HeaderSideBar title="Tạo Tài Khoản Quản Lý" />
      <div className="p-6 ">
        <RegisterManagerComponent />
      </div>
    </div>
  );
};

export default RegisterManager;
