"use client";
import React, { useEffect, useRef } from "react";
import Detail from "../../assets/RiverPark/Detail.jpg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MatBang = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Hiệu ứng cho tiêu đề
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Hiệu ứng cho ảnh
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="pt-10 md:pt-40">
      <div className="flex justify-center">
        <div
          className="w-[300px] md:w-[450px] text-center py-1"
          style={{
            background:
              "linear-gradient(to right, #FFFFFF00, #08B6BC, #FFFFFF00)",
          }}
        >
          <p
            ref={titleRef}
            className="text-[26px] md:text-[32px] font-bold bg-clip-text text-transparent font-utm-alter-gothic"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 30%,  #AA6A10 60%)",
            }}
          >
            TỔNG THỂ MẶT BẰNG
          </p>
        </div>
      </div>

      <div className="pt-10">
        <Image
          ref={imageRef}
          src={Detail}
          alt="River Park Detail"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
      <div className="h-[50px]"></div>
    </div>
  );
};

export default MatBang;
