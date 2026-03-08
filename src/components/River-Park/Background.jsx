"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Bg from "../../assets/RiverPark/Background.png";
import LogoLH from "../../assets/RiverPark/LogoLH2.png";
import LayerBg from "../../assets/RiverPark/LayerBg.png";
import { useGSAP } from "@gsap/react";

const Background = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(containerRef.current, {
      opacity: 0,
      duration: 1.5,
    });

    tl.from(logoRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
    });

    tl.from(
      textRef.current,
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      "-=1" // bắt đầu cùng lúc với logoRef
    );
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${Bg.src})`,
      }}
    >
      <div
        className="w-full h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: `url(${LayerBg.src})`,
        }}
      >
        <div
          ref={containerRef}
          className="h-full w-full mx-auto flex items-end px-4 md:px-10"
        >
          <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center space-x-10 py-16 md:py-10">
            <Image
              ref={logoRef}
              src={LogoLH}
              alt="Logo LaHome - NewLink Investment"
              width={1000}
              height={1000}
              className="w-[300px] md:w-[400px]"
            />
            <div
              ref={textRef}
              className="max-w-[700px] text-[14px] md:text-[16px] space-y-3 md:space-y-2 mt-5 md:pt-0"
            >
              <p>
                <i>
                  Tọa lạc ngay cửa ngõ khu Tây TP.HCM, Khu đô thị sinh thái LA
                  Home ôm trọn vị thế đắc địa với mặt tiền Đại lộ Lương Hòa Bình
                  Chánh.
                </i>
              </p>
              <p>
                <i>
                  Quy mô 100ha, LA Home được Prodezi Long An và Hướng Việt
                  Holdings tâm huyết đầu tư với quy hoạch đồng bộ, pháp lý vững
                  vàng, liền kề KCN sinh thái Prodezi 400ha đầy tiềm năng.
                </i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
