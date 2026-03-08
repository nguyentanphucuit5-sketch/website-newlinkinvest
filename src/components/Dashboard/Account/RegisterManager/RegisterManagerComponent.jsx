import React from "react";
import ToolExit from "../../DashBoardUI/ToolExitUI";
import RegisterManagerForm from "./RegisterManagerForm";

const RegisterManagerComponent = () => {
  return (
    <div className="space-y-8">
      <ToolExit text={"quản lý"} link={"/dashboard/account/manager"} />
      <RegisterManagerForm />
    </div>
  );
};

export default RegisterManagerComponent;
