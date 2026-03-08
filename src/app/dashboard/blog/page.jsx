import BlogComponent from "@/components/Dashboard/Blog/BlogComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const BlogPage = () => {
   
  return (
    <div>
      <HeaderSideBar
        title="Danh Sách Bài Viết"
        showButton={true}
        titleButton={`Tạo Bài Viết`}
        linkButton={`/dashboard/blog/add`}
      />
      <div className="p-6 ">
        <BlogComponent />
      </div>
    </div>
  );
};

export default BlogPage;
