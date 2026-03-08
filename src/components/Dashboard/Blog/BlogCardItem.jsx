"use client";
import React from "react";
import CardItemUI from "../DashBoardUI/CardItemUI";
import { useSelector } from "react-redux";

const BlogCardItem = () => {
  const { blog } = useSelector((state) => state.blog);

  return (
    <div className="grid grid-cols-3 gap-4">
      <CardItemUI title="Bài Viết" value={blog.length} unit={"bài viết"} />
    </div>
  );
};

export default BlogCardItem;
