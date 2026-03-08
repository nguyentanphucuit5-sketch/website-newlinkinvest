import EditBlogComponent from "@/components/Dashboard/Blog/EditBlog/EditBlogComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const EditBlogPage = () => {
  return (
    <div>
      <HeaderSideBar title="Chỉnh Sửa Bài Viết" />
      <div className="p-6 ">
        <EditBlogComponent />
      </div>
    </div>
  );
};

export default EditBlogPage;
