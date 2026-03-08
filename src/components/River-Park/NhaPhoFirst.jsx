"use client";
import React, {  useRef } from "react";
import NPBG from "../../assets/RiverPark/NPBG.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const NhaPhoFirst = () => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Animation cho tiêu đề
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

    // Animation cho hình ảnh
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
    <div className="pt-10 md:pt-20">
      <div className="flex justify-center">
        <div
          className="w-[300px] md:w-[650px] text-center py-1"
          style={{
            background:
              "linear-gradient(to right, #FFFFFF00, #08B6BC, #FFFFFF00)",
          }}
        >
          <p
            ref={titleRef}
            className="text-[26px] md:text-[32px] font-bold bg-clip-text text-transparent font-utm-alter-gothic "
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 30%,  #AA6A10 60%)",
            }}
          >
            NHÀ PHỐ LIỀN KỀ NGANG 6M
          </p>
        </div>
      </div>
      <div className="pt-10">
        <Image
          ref={imageRef}
          src={NPBG}
          alt="River Park NPBG - NewLink Investment"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>

      <div className="h-[50px]"></div>
    </div>
  );
};

export default NhaPhoFirst;
