"use client";
import MainTuyenDung from "./MainTuyenDung";
import LogoTuyenDung from "./LogoTuyenDung";
import ItemTuyenDung from "./ItemTuyenDung";
import Menu from "../Menu";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";

const TuyenDungComponent = () => {
  useTrackUserIP();

  return (
    <div className="relative pb-10 md:pb-0">
      {/* Nội Dung */}
      <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
        <Menu />
      </div>
      <div className="max-w-[1240px] mx-auto  pt-10 md:pt-20 px-4">
        <MainTuyenDung />
        <LogoTuyenDung />
        <ItemTuyenDung />
      </div>
    </div>
  );
};

export default TuyenDungComponent;
