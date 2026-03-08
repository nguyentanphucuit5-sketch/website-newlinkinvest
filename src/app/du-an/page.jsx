import React from "react";
import ProjectItem from "@/components/Du-An/ProjectItem";
import Menu from "@/components/Menu";

export const metadata = {
  title: "Dự Án Đầu Tư - NewLink",
  alternates: {
    canonical: "https://newlinkinvest.com/du-an",
  },
};

const Project = () => {
  return (
    <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
      <Menu />
      <h1 className="hidden">Dự Án Của NewLink Investment</h1>
      <ProjectItem />
    </div>
  );
};

export default Project;
