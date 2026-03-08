"use client";
import React from "react";
import CardItemUI from "../DashBoardUI/CardItemUI";
import { useSelector } from "react-redux";

const CateBlogCardItem = () => {
  const { cateBlog } = useSelector((state) => state.cateBlog);
  return (
    <div className="grid grid-cols-3 gap-4">
      <CardItemUI
        title="Loại Bài Viết"
        value={cateBlog.length}
        unit={"bài viết"}
      />
    </div>
  );
};

export default CateBlogCardItem;
