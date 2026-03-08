"use client";
import React from "react";
import CardItemUI from "../../DashBoardUI/CardItemUI";
import { useSelector } from "react-redux";

const ManagerCartItem = () => {
  // Redux
  const { accountManager } = useSelector((state) => state.auth);

  return (
    <div className="grid grid-cols-3 gap-4">
      <CardItemUI
        title="Tài Khoản Quản Lý"
        value={`${accountManager.length}/5 `}
        unit="tài khoản"
        desc={""}
      />
    </div>
  );
};

export default ManagerCartItem;
