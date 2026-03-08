import AddBlogComponent from "@/components/Dashboard/Blog/AddBlog/AddBlogComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const AddBlogPage = async () => {

  return (
    <div>
      <HeaderSideBar title="Tạo Bài Viết"  />
      <div className="p-6 ">
        <AddBlogComponent />
      </div>
    </div>
  );
};

export default AddBlogPage;
