import { Field } from "@/utils/data";
import Image from "next/image";
import React from "react";

const ItemField = () => {
  return (
    <div className="pt-8 grid grid-cols-1 gap-6">
      {Field.map((item) => (
        <div key={item.id} className="flex items-center space-x-2">
          <div className="flex">
            <div className="border border-[#FAD48A] rounded-full p-3 h-[45px] md:h-[60px] w-[45px] md:w-[60px]">
              <Image src={item.image} alt={item.alt} className="" />
            </div>
          </div>
          <div >
            <p className="text-[14px] md:text-[16px] font-utm-avo-bold">{item.text}</p>
            <p className="text-[12px] md:text-[14px] font-utm-avo"><span className="font-utm-avo-bold">NEWLINK </span> {item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemField;
