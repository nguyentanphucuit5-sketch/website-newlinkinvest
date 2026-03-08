import React from "react";
import doitac from "../../assets/images/doitac.jpg";
import Image from "next/image";
import ItemPartner from "./ItemPartner";
const Partner = () => {
  return (
    <div className="w-full  relative -z-50 ">
      <Image src={doitac} alt="Đối Tác của New Link Investment" className="w-full object-cover" />

      <div className="absolute inset-0  z-50 h-full px-2">
        <div className="max-w-[1240px] h-full mx-auto md:pb-20">
          <div className="flex flex-col h-full justify-end items-center ">
            <h2 className="text-center text-[28px] md:text-[80px] font-utm-avo bg-gradient-to-t from-[#f3f0ea00] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
              ĐỐI TÁC
            </h2>
            <p className="text-center mb-4 -mt-4 md:-mt-10 text-[16px] md:text-[32px] font-utm-avo bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
              CHIẾN LƯỢC
            </p>
            <ItemPartner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
