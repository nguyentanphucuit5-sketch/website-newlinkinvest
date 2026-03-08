import AddCateBlogComponent from "@/components/Dashboard/CateBlog/AddCateBlog/AddCateBlogComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const AddCateBlogPage = () => {
  return (
    <div>
      <HeaderSideBar title="Thêm Loại Bài Viết" />
      <div className="p-6 ">
        <AddCateBlogComponent />
      </div>
    </div>
  );
};

export default AddCateBlogPage;
