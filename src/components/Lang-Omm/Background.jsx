"use client";

import React, { useEffect, useRef } from "react";
import bg from "@/assets/langomm/background.png";
import logo from "@/assets/langomm/logo.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";

gsap.registerPlugin(ScrollTrigger);

const Background = () => {
   useTrackUserIP(); 
  
  const logoRef = useRef(null);
  const textWrapperRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Logo nâng cao: scale, fade, bounce
    tl.from(logoRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // Text nâng cao: từng dòng xuất hiện lần lượt
    const lines = textWrapperRef.current.querySelectorAll(".line");

    tl.from(
      lines,
      {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      },
      "-=0.5"
    );

    // Rounded scroll animation
    gsap.to(wrapperRef.current, {
      borderBottomLeftRadius: "2rem",
      borderBottomRightRadius: "2rem",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative h-screen overflow-hidden bg-white transition-all duration-300"
    >
      <h1 className="hidden">Làng Nghỉ Dưỡng Omm</h1>
      <Image
        src={bg}
        alt="Làng Omm - Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full h-screen pt-10">
        <div className="w-full flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <Image
            ref={logoRef}
            src={logo}
            alt="Làng Omm - Logo"
            className="w-[120px] md:w-[160px]"
          />

          {/* Text với từng dòng tách riêng */}
          <div
            ref={textWrapperRef}
            className="text-[28px] md:text-[48px] font-bold text-[#3C6B33] text-center leading-tight"
          >
            <h2 className="line">
              <span className="font-svn-ameyallinda font-medium">Đầu tư</span>{" "}
              AN NHIÊN
            </h2>
            <h2 className="line">
              SINH LỜI{" "}
              <span className="font-svn-ameyallinda font-medium">Bền vững</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
