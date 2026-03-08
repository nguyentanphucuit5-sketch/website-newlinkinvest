"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Car from "../../assets/RiverPark/Car.png";
import Map from "../../assets/RiverPark/Map.png";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TienIchSecond = () => {
  const titleRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const pointsRef = useRef([]);

  useGSAP(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Left column
    gsap.from(leftColRef.current, {
      scrollTrigger: {
        trigger: leftColRef.current,
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Right column
    gsap.from(rightColRef.current, {
      scrollTrigger: {
        trigger: rightColRef.current,
        start: "top 80%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Points animation (staggered)
    gsap.from(pointsRef.current, {
      scrollTrigger: {
        trigger: leftColRef.current,
        start: "top 80%",
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div>
      {/* Title */}
      <div className="flex justify-center" ref={titleRef}>
        <div
          className="w-[300px] md:w-[450px] text-center py-1"
          style={{
            background:
              "linear-gradient(to right, #FFFFFF00, #08B6BC, #FFFFFF00)",
          }}
        >
          <p
            className="text-[26px] md:text-[32px] font-bold font-utm-alter-gothic bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 30%,  #AA6A10 60%)",
            }}
          >
            TIỆN ÍCH NỔI BẬT
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-16 pt-5 md:pt-10">
        {/* Left Column */}
        <div className="w-full md:w-1/2" ref={leftColRef}>
          <div className="relative">
            <div
              className="text-[24px] md:text-[32px] bg-clip-text text-transparent font-1ftv-nillota "
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #007A7C 0%,  #04F7FB 80%)",
              }}
            >
              Tiện Ích Liền Kề
            </div>
            <div className="absolute -bottom-3 md:-bottom-4 left-20 md:left-28">
              <p
                className="text-[14px] md:text-[16px]  bg-clip-text text-transparent "
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 30%,  #AA6A10 60%)",
                }}
              >
                tiện nghi liền mạch
              </p>
            </div>
          </div>
          <div className="pt-4 md:pt-8 md:pr-8">
            Trong vòng bán kính 45 phút di chuyển từ cổng dự án, cư dân LA Home
            có thể tiếp cận đa dạng tiện ích ngoại khu, từ trường học, bệnh
            viện, chợ, đến trung tâm thương mại, đáp ứng toàn diện mọi nhu cầu
            của cư dân{" "}
          </div>

          {/* Points */}
          <div className="pt-4 flex items-center">
            <div>
              <Image
                src={Car}
                alt="Car - NewLink Investment"
                width={1000}
                height={1000}
                className="w-[60px]"
              />
            </div>
            <div className="pl-10 flex">
              {/* Point 1 */}
              <div
                className="relative flex flex-col items-center z-0"
                ref={(el) => (pointsRef.current[0] = el)}
              >
                <div className="w-[120px] md:w-[200px] h-[1px] border border-[#00979C] relative z-0"></div>
                <div className="absolute -top-7 -left-8 md:-top-8 md:-left-10 flex flex-col items-center">
                  <div
                    className="text-[12px] md:text-[16px] font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #EED7B3 0%, #DFB02F 30%, #AA6A10 60%)",
                    }}
                  >
                    05 Phút
                  </div>
                  <div className="w-[20px] h-[20px] border rounded-full bg-[#00979C] hover:scale-110"></div>
                  <p className="text-[10px] md:text-[14px]">Bình Chánh</p>
                </div>
              </div>

              {/* Point 2 */}
              <div
                className="relative flex flex-col items-center z-0"
                ref={(el) => (pointsRef.current[1] = el)}
              >
                <div className="w-[120px] md:w-[200px] h-[1px] border border-[#00979C] relative z-0"></div>
                <div className="absolute -top-7 -left-20 md:-top-8 md:-left-24 flex flex-col items-center">
                  <div
                    className="text-[12px] md:text-[16px] font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #EED7B3 0%, #DFB02F 30%, #AA6A10 60%)",
                    }}
                  >
                    15 Phút
                  </div>
                  <div className="w-[20px] h-[20px] border rounded-full bg-[#00979C] hover:scale-110"></div>
                  <p className="text-[10px] md:text-[14px]">
                    Cao tốc TP.HCM - Trung Lương
                  </p>
                </div>
                <div
                  ref={(el) => (pointsRef.current[2] = el)}
                  className="absolute -top-7 -right-12 md:-top-8 md:-right-14 flex flex-col items-center"
                >
                  <div
                    className="text-[12px] md:text-[16px] font-bold bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #EED7B3 0%, #DFB02F 30%, #AA6A10 60%)",
                    }}
                  >
                    20 Phút
                  </div>
                  <div className="w-[20px] h-[20px] border rounded-full bg-[#00979C] hover:scale-110"></div>
                  <p className="text-[10px] md:text-[14px]">
                    TP.Tân An, Long An
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2" ref={rightColRef}>
          <div className="w-full flex justify-center pt-6 md:pt-0">
            <Image
              src={Map}
              alt="Map - NewLink Investment"
              width={1000}
              height={1000}
              className="w-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TienIchSecond;
