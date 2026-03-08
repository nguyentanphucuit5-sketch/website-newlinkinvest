"use client";
import React, { useRef, useEffect } from "react";
import TTA1 from "../../assets/RiverPark/TTA1.png";
import TTA5 from "../../assets/RiverPark/TTA5.png";
import TTA6 from "../../assets/RiverPark/TTA6.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ThanhTo = () => {
  const titleRef = useRef(null);
  const iconRef = useRef(null);
  const imageRef = useRef(null);

  // Refresh ScrollTrigger after images load
  useEffect(() => {
    const images = document.querySelectorAll("img");
    const loadedImages = Array.from(images).map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) resolve();
          else img.onload = resolve;
        })
    );

    Promise.all(loadedImages).then(() => {
      ScrollTrigger.refresh();
    });

    // Fallback: Refresh after 5 seconds if images don't load
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  useGSAP(() => {
    // Animation for title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for icon
    gsap.fromTo(
      iconRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: iconRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="w-full h-full flex flex-col md:flex-row max-w-[1440px] mx-auto pt-20">
        <div className="w-full md:w-2/5 font-1ftv-nillota">
          <div className="w-full max-w-[300px] mx-auto" ref={titleRef}>
            <p
              className="text-[38px] md:text-[32px] bg-clip-text text-transparent font-1ftv-nillota"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #EED7B3 0%, #DFB02F 30%, #AA6A10 60%)",
              }}
            >
              Biến ngôi nhà
            </p>
            <p
              className="text-[38px] md:text-[42px] bg-clip-text text-transparent text-end font-1ftv-nillota"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #007A7C 0%, #04F7FB 80%)",
              }}
            >
              Thành Tổ Ấm
            </p>
          </div>

          <div
            className="flex w-full h-full justify-center space-x-2 md:space-x-5"
            ref={iconRef}
          >
            {/* Ảnh 1 */}
            <div className="relative">
              <Image
                src={TTA5}
                alt="Thành Tổ Ấm - NewLink Investment"
                width={130}
                height={130} // Adjust based on image aspect ratio
                className="w-[80px] md:w-[130px]"
              />
              <p className="absolute inset-0 md:-top-56 flex items-center justify-center text-center font-bold font-1ftv-nillota text-[24px] md:text-[36px] text-[#87582F]">
                Ấm <br /> Cúng
              </p>
            </div>

            {/* Ảnh 2 */}
            <div className="relative pt-10 md:pt-20">
              <Image
                src={TTA6}
                alt="Thành Tổ Ấm - NewLink Investment"
                width={130}
                height={130} // Adjust based on image aspect ratio
                className="w-[80px] md:w-[130px]"
              />
              <p className="absolute inset-0 top-16 md:-top-24 flex items-center justify-center text-center font-bold font-1ftv-nillota text-[24px] md:text-[36px] text-[#87582F]">
                Sum <br /> Vầy
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-3/5 px-2 md:px-0 mt-4 md:mt-0"
          ref={imageRef}
        >
          <Image
            src={TTA1}
            alt="Thành Tổ Ấm - NewLink Investment"
            width={800}
            height={600} // Adjust based on image aspect ratio
            className="w-full"
          />
        </div>
      </div>
      <div className="h-[50px]"></div>
    </div>
  );
};

export default ThanhTo;
