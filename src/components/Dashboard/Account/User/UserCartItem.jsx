"use client";
import React from "react";
import CardItemUI from "../../DashBoardUI/CardItemUI";
import { useSelector } from "react-redux";

const UserCartItem = () => {
  const { accountUser } = useSelector((state) => state.auth);
  return (
    <div className="grid grid-cols-3 gap-4">
      <CardItemUI title="Tài Khoản User" value={accountUser.length} />
    </div>
  );
};

export default UserCartItem;
