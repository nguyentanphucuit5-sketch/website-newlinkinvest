import React from "react";
import Menu from "../Menu";
import NewsList from "./NewsList";

const NewsComponent = () => {
  
  return (
    <div className="relative  md:h-full ">
      {/* Nội Dung */}
      <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
        <Menu />
        <NewsList />
      </div>
    </div>
  );
};

export default NewsComponent;
