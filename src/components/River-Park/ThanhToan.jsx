"use client";
import Image from "next/image";
import React from "react";
import MiniLogo from "../../assets/RiverPark/MiniLogo.png";
import TT1 from "../../assets/RiverPark/TT1.png";
import TT2 from "../../assets/RiverPark/TT2.png";

const ThanhToan = () => {
  return (
    <div className="w-full h-full flex flex-col max-w-[1340px] mx-auto pt-10 md:pt-20">
      <div className="w-full max-w-[1100px] mx-auto flex items-center md:items-end space-x-3 px-2 pb-4">
        <div>
          <Image
            src={MiniLogo}
            alt="Logo NewLink Investment"
            width={1000}
            height={1000}
            className="w-[30px] md:w-[50px]"
            loading="eager" // 🟢 Load ngay lập tức
          />
        </div>
        <div className="font-1ftv-nillota text-[20px]">
          <p
            className="text-[20px] md:text-[28px] bg-clip-text text-transparent font-1ftv-nillota"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #007A7C 0%,  #04F7FB 80%)",
            }}
          >
            Chính sách <span className="text-[42px]">Thanh Toán</span>
          </p>
        </div>
      </div>

      <div
        className="bg-clip-text md:h-[1300px] rounded-xl relative"
        style={{
          background: "linear-gradient(to bottom, #0AC9CF 0%,  #FFFFFF00 80%)",
        }}
      >
        <div className="pt-2 md:pt-10 px-1 md:px-20">
          <Image
            src={TT1}
            alt="Chính sách Thanh Toán 1"
            width={2000}
            height={2000}
            className="tt-img"
            loading="eager" // 🟢 Load ngay lập tức
          />
        </div>
        <div>
          <Image
            src={TT2}
            alt="Chính sách Thanh Toán 2"
            width={2000}
            height={2000}
            className="tt-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ThanhToan;
