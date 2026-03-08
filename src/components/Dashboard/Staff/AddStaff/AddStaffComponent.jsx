import React from "react";
import ToolExit from "../../DashBoardUI/ToolExitUI";
import AddStaffForm from "./AddStaffForm";

const AddStaffComponent = () => {
  return (
    <div className="space-y-8">
      <ToolExit text={""} link={"/dashboard/blog"} />
      <AddStaffForm />
    </div>
  );
};

export default AddStaffComponent;
