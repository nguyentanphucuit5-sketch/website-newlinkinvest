import React from "react";
import ToolExit from "../../DashBoardUI/ToolExitUI";
import AddBlogForm from "./AddBlogForm";

const AddBlogComponent = () => {
  return (
    <div className="space-y-8">
      <ToolExit text={""} link={"/dashboard/blog"} />
      <AddBlogForm />
    </div>
  );
};

export default AddBlogComponent;
