"use client"; // Đảm bảo đây là Client Component

import React from "react";
import { signOut } from "next-auth/react";
import { IoIosLogOut } from "react-icons/io"; // Thêm icon logout

const LogoutButton = () => {
  // Hàm sử lý Logout
  const handleLogout = () => {
    signOut({ callbackUrl: "/auth/login" }); // Redirect đến trang login sau khi logout
  };

  return (
    <div
      onClick={handleLogout}
      className="cursor-pointer flex items-center space-x-2 "
    >
      <IoIosLogOut />
      <span>Logout</span>
    </div>
  );
};

export default LogoutButton;
