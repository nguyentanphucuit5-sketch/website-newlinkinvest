"use client";
import React from "react";
import logoLH from "../../assets/RiverPark/LogoLH.png";
import logoRP from "../../assets/RiverPark/LogoRP.png";
import logoNIC from "../../assets/RiverPark/LogoNIC.png";
import Image from "next/image";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";

const Header = () => {
  useTrackUserIP();

  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-6">
      <div className="relative flex justify-between items-center py-4 md:py-5 ">
        {/* Logo bên trái */}
        <div>
          <Image
            src={logoLH}
            alt="Logo LaHome - Newlink Investment"
            width={1000}
            height={1000}
            className="w-[80px] md:w-[160px]"
          />
        </div>

        {/* Logo giữa - căn giữa tuyệt đối */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Image
            src={logoRP}
            alt="Logo River Park - Newlink Investment"
            width={1000}
            height={1000}
            className="w-[120px] md:w-[160px]"
          />
        </div>

        {/* Logo bên phải */}
        <div>
          <Image
            src={logoNIC}
            alt="Logo NIC - Newlink Investment"
            width={1000}
            height={1000}
            className="w-[40px] md:w-[80px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
