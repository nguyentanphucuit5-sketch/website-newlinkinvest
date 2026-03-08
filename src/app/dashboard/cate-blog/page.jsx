import CateBlogComponent from "@/components/Dashboard/CateBlog/CateBlogComponent";
import HeaderSideBar from "@/components/Dashboard/SideBar/HeaderSideBar";
import React from "react";

const CateBlogPage = () => {
  return (
    <div>
      <HeaderSideBar
        title="Loại Bài Viết"
        showButton={true}
        titleButton={`Thêm Loại Mới`}
        linkButton={`/dashboard/cate-blog/add`}
      />
      <div className="p-6 ">
        <CateBlogComponent />
      </div>
    </div>
  );
};

export default CateBlogPage;
