import React from "react";
import sodo from "../../assets/images/sodo.png";
import Image from "next/image";
const SDMap = () => {
  return (
    <div className="relative z-50 py-5 md:py-10 px-2 mt-5 md:mt-20  lg:px-0 ">
      <h1 className="text-[18px] text-center lg:text-[48px] font-utm-avo-bold  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
        SƠ ĐỒ TỔ CHỨC NEWLINK 
      </h1>
      <Image src={sodo} alt="NewLink Sơ đồ Tổ Chức" className="mt-10" />
    </div>
  );
};

export default SDMap;
