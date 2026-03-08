import React from "react";
import CateBlogCardItem from "./CateBlogCardItem";
import CateBlogTool from "./CateBlogTool";
import CateBlogTable from "./CateBlogTable";


const CateBlogComponent = () => {
  return (
    <div className="space-y-8">
      <CateBlogCardItem />
      <CateBlogTool />
      <CateBlogTable />
    </div>
  );
};

export default CateBlogComponent;
