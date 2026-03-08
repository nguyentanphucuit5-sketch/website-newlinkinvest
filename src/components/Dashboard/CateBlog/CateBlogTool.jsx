"use client";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setCateBlogSearch } from "@/redux/feature/searchSlice";
import SearchUI from "../DashBoardUI/SearchUI";

const CateBlogTool = () => {
  const dispatch = useDispatch();
  const timeoutRef = useRef(null); // Dùng useRef để lưu timeout ID

  const handleSearchChange = (e) => {
    // Hủy timeout cũ nếu có
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Tạo timeout mới, trì hoãn 300ms
    timeoutRef.current = setTimeout(() => {
      dispatch(setCateBlogSearch(e.target.value));
    }, 300);
  };

  return (
    <div className="flex justify-between items-center">
      <SearchUI
        placeholder="Tìm Kiếm"
        handleSearchChange={handleSearchChange}
      />
    </div>
  );
};

export default CateBlogTool;
