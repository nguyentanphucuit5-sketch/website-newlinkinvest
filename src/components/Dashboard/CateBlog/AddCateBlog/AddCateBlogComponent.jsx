import React from "react";
import ToolExit from "../../DashBoardUI/ToolExitUI";
import AddCateBlogForm from "./AddCateBlogForm";

const AddCateBlogComponent = () => {
  return (
    <div className="space-y-8">
      <ToolExit text={""} />
      <AddCateBlogForm />
    </div>
  );
};

export default AddCateBlogComponent;
