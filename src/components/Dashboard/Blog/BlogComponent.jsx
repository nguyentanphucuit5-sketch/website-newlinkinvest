import React from "react";
import BlogCartItem from "./BlogCardItem";
import BlogTool from "./BlogTool";
import BlogTable from "./BlogTable";

const BlogComponent = () => {
 
  return (
    <div className="space-y-8">
      <BlogCartItem />
      <BlogTool />
      <BlogTable />
    </div>
  );
};

export default BlogComponent;
