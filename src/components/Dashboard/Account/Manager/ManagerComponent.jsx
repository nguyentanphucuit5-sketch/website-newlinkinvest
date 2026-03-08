import React from "react";
import ManagerCartItem from "./ManagerCartItem";
import ManagerTool from "./ManagerTool";
import ManagerTable from "./ManagerTable";


const ManagerComponent = () => {
  return (
    <div className="space-y-8">
      <ManagerCartItem />
      <ManagerTool />
      <ManagerTable />
    </div>
  );
};
export default ManagerComponent;
