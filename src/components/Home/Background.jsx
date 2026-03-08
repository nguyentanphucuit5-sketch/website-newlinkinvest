"use client";
import Image from "next/image";
import background from "../../assets/images/background.png";
import logo from "../../assets/images/logo.png";
import ListMenu from "./ListMenu";
import NicOverview from "./NicOverview";
import MenuSightsee from "./MenuSightsee";
import Menu from "../Menu";

const Background = ({ onExploreClick }) => {
  return (
    <div className="relative h-screen md:h-[1050px]">
      {/* Background Image */}
      <div className="absolute right-0 -z-50">
        <Image
          src={background}
          alt="New Link Investment"
          className="md:w-[1158px] md:h-[1050px] h-screen"
        />
      </div>

      {/* Gradient Overlay (chỉ 10% chiều cao) */}
      <div className="absolute bottom-0 left-0 w-full h-[80%] md:h-[35%] ">
        <div className="h-full w-full bg-gradient-to-t from-[#09303D] via-[#09303de0] to-transparent z-0"></div>
      </div>

      {/* Nội Dung */}
      <div className="max-w-[1240px]  mx-auto py-5 px-1 md:px-0 ">
        <Menu />
        <NicOverview />
        <MenuSightsee onExploreClick={onExploreClick} />
      </div>
    </div>
  );
};

export default Background;
