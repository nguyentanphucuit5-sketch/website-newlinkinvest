import React from "react";
import banner from "../../assets/images/bannerTD.png";
import Image from "next/image";
const BannerTD = () => {
  return (
    <div className="md:py-20 py-10">
      <div className=" w-full  flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-[#0C6985] via-[#09303d] to-transparent">
        <Image
          src={banner}
          alt="New Link Investment Banner"
          className="w-full md:w-[50%] h-[90px] md:h-full block md:hidden"
        />
        <div className="w-full md:w-[50%] h-[100px] md:h-[130px] flex justify-center items-center  z-0 ">
          <h2 className=" text-[20px] md:text-[32px] font-utm-avo bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
            Khám phá cơ hội, phát triển <br /> sự nghiệp cùng NewLink!
          </h2>
        </div>
        <Image
          src={banner}
          alt="New Link Investment Banner"
          className="w-full md:w-[50%] h-[90px] md:h-full hidden md:block"
        />
      </div>
    </div>
  );
};

export default BannerTD;
