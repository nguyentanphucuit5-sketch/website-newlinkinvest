"use client";
import Image from "next/image";
import React, {  useRef } from "react";
import MiniLogo from "../../assets/RiverPark/MiniLogo.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const BanHang = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".card",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-full flex flex-col max-w-[1100px] mx-auto pt-10 px-2 md:pt-20"
    >
      <div className="flex items-center md:items-end space-x-3 ">
        <div>
          <Image
            src={MiniLogo}
            alt="Logo NewLink Investment"
            width={1000}
            height={1000}
            className="w-[30px] md:w-[50px]"
          />
        </div>
        <div className="font-1ftv-nillota text-[20px]">
          <p
            className="text-[20px] md:text-[28px] bg-clip-text text-transparent font-1ftv-nillota"
            style={{
              backgroundImage: "linear-gradient(to bottom, #007A7C 0%,  #04F7FB 80%)",
            }}
          >
            Chính sách <span className="text-[42px]">Bán hàng</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-5 pt-5 md:space-y-12">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-15">
          {/* Card 1 */}
          <div
            className="card w-[300px] h-[150px] rounded-3xl"
            style={{
              backgroundImage: "linear-gradient(to bottom, #FFFFFF00 0%,  #0AC9CF 80%)",
            }}
          >
            <p
              className="text-[20px] md:text-[24px] text-center bg-clip-text text-transparent font-bold pt-4"
              style={{
                backgroundImage: "linear-gradient(to top, #007A7C 0%,  #04F7FB 80%)",
              }}
            >
              THANH TOÁN
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div
                className="text-[52px] md:text-[52px] text-center bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 50%, #AA6A10 80%)",
                }}
              >
                25<span className="text-[20px]">%</span>
              </div>
              <div className="text-[#097D81] font-bold">Đến khi <br /> nhận nhà</div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card w-[300px] h-[150px] rounded-3xl"
            style={{
              backgroundImage: "linear-gradient(to bottom, #FFFFFF00 0%,  #0AC9CF 80%)",
            }}
          >
            <p
              className="text-[20px] md:text-[24px] text-center bg-clip-text text-transparent font-bold pt-4"
              style={{
                backgroundImage: "linear-gradient(to top, #007A7C 0%,  #04F7FB 80%)",
              }}
            >
              HTLS
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div
                className="text-[52px] md:text-[52px] text-center bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 50%, #AA6A10 80%)",
                }}
              >
                0<span className="text-[20px]">%</span>
              </div>
              <div className="text-[#097D81] font-bold">Đến</div>
              <div
                className="text-[52px] md:text-[52px] text-center bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 50%, #AA6A10 80%)",
                }}
              >
                15<span className="text-[20px]">th</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-15">
          {/* Card 3 */}
          <div
            className="card w-[300px] h-[150px] rounded-3xl"
            style={{
              backgroundImage: "linear-gradient(to bottom, #FFFFFF00 0%,  #0AC9CF 80%)",
            }}
          >
            <p
              className="text-[20px] md:text-[24px] text-center bg-clip-text text-transparent font-bold pt-4"
              style={{
                backgroundImage: "linear-gradient(to top, #007A7C 0%,  #04F7FB 80%)",
              }}
            >
              NGÂN HÀNG
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="text-[#097D81] font-bold">Hỗ trợ vay<br />lên đến</div>
              <div
                className="text-[52px] md:text-[52px] text-center bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 50%, #AA6A10 80%)",
                }}
              >
                70<span className="text-[20px]">%</span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="card w-[300px] h-[150px] rounded-3xl"
            style={{
              backgroundImage: "linear-gradient(to bottom, #FFFFFF00 0%,  #0AC9CF 80%)",
            }}
          >
            <p
              className="text-[20px] md:text-[24px] text-center bg-clip-text text-transparent font-bold pt-4"
              style={{
                backgroundImage: "linear-gradient(to top, #007A7C 0%,  #04F7FB 80%)",
              }}
            >
              ƯU ĐÃI
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div className="text-[#097D81] font-bold text-center">
                Tổng ưu đãi <br /> chiết khấu đến <br />
                <span className="font-light text-[#097D81]">(Không trừ vào giá bán)</span>
              </div>
              <div
                className="text-[52px] md:text-[52px] text-center bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 50%, #AA6A10 80%)",
                }}
              >
                11<span className="text-[20px]">%</span>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="card w-[300px] h-[150px] rounded-3xl"
            style={{
              backgroundImage: "linear-gradient(to bottom, #FFFFFF00 0%,  #0AC9CF 80%)",
            }}
          >
            <p
              className="text-[20px] md:text-[24px] text-center bg-clip-text text-transparent font-bold pt-4"
              style={{
                backgroundImage: "linear-gradient(to top, #007A7C 0%,  #04F7FB 80%)",
              }}
            >
              TẶNG
            </p>
            <div className="flex justify-center items-center space-x-2">
              <div
                className="text-[52px] md:text-[52px] text-center bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 50%, #AA6A10 80%)",
                }}
              >
                2
              </div>
              <div className="text-[#097D81] font-bold">
                <span
                  className="text-[20px] md:text-[20px] text-center bg-clip-text text-transparent font-bold"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, #EED7B3 0%,  #DFB02F 50%, #AA6A10 80%)",
                  }}
                >
                  Năm
                </span>
                <br /> <span>Phí quản lý</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanHang;
