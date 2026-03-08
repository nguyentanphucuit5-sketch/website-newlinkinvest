import React from "react";
import ToolExit from "../../DashBoardUI/ToolExitUI";
import EditBlogForm from "./EditBlogForm";

const EditBlogComponent = () => {
  return (
    <div className="space-y-8">
      <ToolExit text={""} />
      <EditBlogForm />
    </div>
  );
};

export default EditBlogComponent;
