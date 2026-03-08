"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TienIchFirst = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".moc");
    gsap.fromTo(
      items,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="pt-10 md:pt-20" ref={containerRef}>
      <p
        className="text-[24px] font-bold bg-clip-text text-transparent "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #007A7C 0%,  #04F7FB 80%)",
        }}
      >
        TIỆN ÍCH
      </p>

      {/* Desktop */}
      <div className="hidden md:block">
        <div className="w-full flex justify-center mt-10 ">
          {[
            {
              time: "05 Phút",
              places: [
                "Trường THCS & THPT Lương Hòa",
                "Trung tâm y tế Lương Hòa",
                "UBN Xã Lương Hòa",
                "Trường mẫu giáo Lương Hòa",
              ],
            },
            { time: "10 Phút", places: ["Trường Quốc Tế Emasi Plus"] },
            { time: "15 Phút", places: ["TP.Tân An, Long An"] },
            { time: "30 Phút", places: ["Bệnh viện Nhi Đồng TP.HCM"] },
            { time: "35 Phút", places: ["Chợ Bình Chánh"] },
            { time: "40 Phút", places: ["AEON Mall Bình Tân"] },
          ].map((item, index) => (
            <div key={index} className="relative z-0 moc">
              <div className="w-[120px] md:w-[180px] h-[1px] border border-[#00979C] relative z-0"></div>
              <div
                className={`absolute -top-8 ${
                  index === 0
                    ? "md:-left-24"
                    : index === 1
                      ? "md:-left-6"
                      : index === 3
                        ? "md:left-20"
                        : index === 4
                          ? "md:left-28"
                          : index === 2
                            ? "md:-left-2"
                            : index === 5
                              ? "md:-right-14 right-[-48px]"
                              : index === 3
                                ? "md:left-10"
                                : "md:left-10"
                } flex flex-col items-center`}
              >
                <div
                  className="text-[12px] md:text-[16px] font-bold bg-clip-text text-transparent "
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #EED7B3 0%, #DFB02F 30%, #AA6A10 60%)",
                  }}
                >
                  {item.time}
                </div>
                <div className="w-[20px] h-[20px] border rounded-full bg-[#00979C] hover:scale-110 tran"></div>
                <div className="text-[10px] md:text-[14px] text-center">
                  {item.places.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <div className="w-full flex flex-col mt-5">
          {[
            {
              time: "05 Phút",
              places: [
                "Trường THCS & THPT Lương Hòa",
                "Trung tâm y tế Lương Hòa",
                "UBN Xã Lương Hòa",
                "Trường mẫu giáo Lương Hòa",
              ],
              height: "120px",
            },
            {
              time: "10 Phút",
              places: ["Trường Quốc Tế Emasi Plus"],
              height: "80px",
            },
            {
              time: "15 Phút",
              places: ["TP.Tân An, Long An"],
              height: "80px",
            },
            {
              time: "30 Phút",
              places: ["Bệnh viện Nhi Đồng TP.HCM"],
              height: "120px",
            },
            {
              time: "35 Phút",
              places: ["Chợ Bình Chánh"],
              height: "80px",
            },
            {
              time: "40 Phút",
              places: ["AEON Mall Bình Tân"],
              height: "10px",
            },
          ].map((item, index) => (
            <div className="relative z-0 w-full flex space-x-4 moc" key={index}>
              <div
                className={`h-[${item.height}] w-[1px] border border-[#00979C] relative z-0`}
              >
                <div className="absolute -top-0 -left-2.5 w-[20px] h-[20px] border rounded-full bg-[#00979C] hover:scale-110 tran"></div>
              </div>
              <div>
                <div
                  className="text-[16px] font-bold bg-clip-text text-transparent "
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #EED7B3 0%, #DFB02F 30%, #AA6A10 60%)",
                  }}
                >
                  {item.time}
                </div>
                <div className="text-[14px]">
                  {item.places.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TienIchFirst;
