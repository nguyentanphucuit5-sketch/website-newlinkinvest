import { Partner } from "@/utils/data";
import Image from "next/image";
import React from "react";

const ItemPartner = () => {
  return (
    <div className="border border-[#FAD48A]/60 rounded-[20px] py-2 md:py-10 w-full p-5 grid grid-cols-5 gap-4 justify-items-center ">
      {Partner.map((partner) => (
        <div key={partner.id} className={`md:w-50 h-5 md:h-20 flex justify-center items-center  `}>
          <Image
            src={partner.image}
            alt={partner.alt}
            className={`${partner.className}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemPartner;