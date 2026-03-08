"use client";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setBlogSearch } from "@/redux/feature/searchSlice";
import SearchUI from "../DashBoardUI/SearchUI";

const BlogTool = () => {
  const dispatch = useDispatch();
  const timeoutRef = useRef(null); // Dùng useRef để lưu timeout ID

  const handleSearchChange = (e) => {
    // Hủy timeout cũ nếu có
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Tạo timeout mới, trì hoãn 300ms
    timeoutRef.current = setTimeout(() => {
      dispatch(setBlogSearch(e.target.value));
    }, 300);
  };

  return (
    <div className="flex justify-between items-center">
      <SearchUI
        placeholder="Tìm Kiếm"
        handleSearchChange={handleSearchChange}
      />
      <div></div>
    </div>
  );
};

export default BlogTool;
