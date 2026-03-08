import React from "react";
import ItemFooter from "./ItemFooter";
import IconFooter from "./IconFooter";
import footer1 from "../assets/images/footer1.png";
import Image from "next/image";

const Footer = () => {

  
  return (
    <div className="relative ">
      <div className="max-w-[1240px]  mx-auto py-5 pt-10 px-2 ">
        <div className="pb-4">
          <h2 className="text-[12px] md:text-[20px] font-utm-avo-bold  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
            Công ty cổ phần đầu tư bất động sản Newlink <br /> Newlink Real
            Estate Investment Joint Stock Company
          </h2>
        </div>
        <div className="flex justify-between items-end">
          <ItemFooter />
          <IconFooter />
        </div>
      </div>
      <div className="absolute bottom-0 w-full -z-50">
        <Image src={footer1} alt="footer1" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Footer;
