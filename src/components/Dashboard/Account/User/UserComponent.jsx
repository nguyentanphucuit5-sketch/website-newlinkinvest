import React from "react";
import UserCartItem from "./UserCartItem";
import UserTool from "./UserTool";
import UserTable from "./UserTable";

const UserComponent = () => {
  return (
    <div className="space-y-8">
      <UserCartItem />
      <UserTool />
      <UserTable />
    </div>
  );
};

export default UserComponent;
