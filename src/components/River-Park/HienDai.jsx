"use client";
import React, {  useRef } from "react";
import HD1 from "../../assets/RiverPark/HD1.png";
import HD2 from "../../assets/RiverPark/HD2.png";
import HD3 from "../../assets/RiverPark/HD3.png";
import HD4 from "../../assets/RiverPark/HD4.png";
import HD5 from "../../assets/RiverPark/HD5.png";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HienDai = () => {
  const titleRef = useRef(null);
  const img1Ref = useRef(null);
  const swiperRef = useRef(null);

  const data = [{ image: HD2 }, { image: HD3 }, { image: HD4 }, { image: HD5 }];

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      img1Ref.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top 90%",
        },
      }
    );

    gsap.fromTo(
      swiperRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: swiperRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
      <div className="w-full h-full max-w-[1440px] mx-auto pt-12 md:pt-24 relative">
        <div className="max-w-[1000px] mx-auto ">
          <div
            ref={titleRef}
            className="text-[38px] md:text-[42px] bg-clip-text text-transparent flex items-start font-1ftv-nillota"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #007A7C 0%,  #04F7FB 80%)",
            }}
          >
            <span
              className="text-[20px] md:text-[24px] bg-clip-text text-transparent pt-2 px-2"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 30%,  #AA6A10 60%)",
              }}
            >
              Nội thất{" "}
            </span>{" "}
            Hiện đại
          </div>
        </div>

        <div className="pt-5 w-full flex flex-col md:flex-row px-2">
          <div className="w-full md:w-3/5" ref={img1Ref}>
            <Image src={HD1} alt="Hien dai 1 - NewLink Investment" />
          </div>
          <div className="w-full md:w-2/5 flex pt-2 md:pt-0">
            <div
              className="flex w-full h-full justify-center items-center"
              ref={swiperRef}
            >
              <div className="w-full flex justify-center items-center swiper-container">
                <Swiper
                  pagination={{ dynamicBullets: true, clickable: true }}
                  modules={[Pagination]}
                  className="w-full max-w-[500px]"
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                >
                  {data.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="md:py-8 swiper-slide-content">
                        <Image
                          src={item.image}
                          alt={`Làng Omm - ${item.title}`}
                          className="w-full"
                          priority={index === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HienDai;
