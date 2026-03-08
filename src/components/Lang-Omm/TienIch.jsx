"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import textOmm from "@/assets/langomm/Text.png";
import tienich1 from "@/assets/langomm/tienich1.png";
import tienich2 from "@/assets/langomm/tienich2.png";
import tienich3 from "@/assets/langomm/tienich3.png";
import tienich4 from "@/assets/langomm/tienich4.png";
import tienich5 from "@/assets/langomm/tienich5.png";
import tienich6 from "@/assets/langomm/tienich6.png";
import tienich7 from "@/assets/langomm/tienich7.png";
import tienich8 from "@/assets/langomm/tienich8.png";
import tienich9 from "@/assets/langomm/tienich9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const TienIch = () => {
  const data = [
    { title: "QUẢNG TRƯỜNG CA NHẠC", image: tienich1 },
    { title: "KHU NHÀ HÀNG - QUÁN COFFEE", image: tienich2 },
    { title: "KHU HỒ CÂU CÁ", image: tienich3 },
    { title: "KHU ĐỒI CHÈ", image: tienich4 },
    { title: "KHU CHÈO THUYỀN KAYAK", image: tienich5 },
    { title: "KHU BBQ", image: tienich6 },
    { title: "KHU CAMPING SUỐI TRẮNG", image: tienich7 },
    { title: "KHU FARM LÀNG OMM", image: tienich8 },
    { title: "KHU NHÀ BUNGALOW", image: tienich9 },
  ];

  useEffect(() => {
    // Animation for the text content section
    gsap.fromTo(
      ".text-content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".text-content",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Staggered animation for paragraphs
    gsap.fromTo(
      ".text-paragraph",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".text-content",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for the Swiper slider
    gsap.fromTo(
      ".swiper-container",
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".swiper-container",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for Swiper slides
    gsap.fromTo(
      ".swiper-slide-content",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".swiper-container",
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="w-full h-full py-20 mx-auto backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Text Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-content">
          <div className="flex flex-row items-center justify-center md:justify-start sm:items-start gap-4">
            <h2 className="text-[20px] sm:text-4xl font-bold text-[#41A347]">
              TIỆN ÍCH <br /> NỔI BẬT CỦA
            </h2>
            <Image
              src={textOmm}
              alt="Làng Omm Logo"
              className="w-[170px] md:w-80 max-w-full"
              priority
            />
          </div>
          <div className="mt-8 max-w-lg text-[14px] md:text-[16px] text-white leading-relaxed">
            <p className="text-paragraph">
              Làng Omm không chỉ là dự án nghỉ dưỡng, mà còn là một “ốc đảo
              xanh” hòa mình trong thiên nhiên giữa đồi chè và rừng thông. Nội
              khu được trang bị nhiều tiện ích như quảng trường tổ chức sự kiện,
              quán café – nhà hàng ven hồ, khu camping, khu BBQ, hồ bơi vô cực
              và hồ sinh thái tích hợp các hoạt động chèo thuyền, câu cá, tham
              gia các trò chơi ngoài trời.
            </p>
            <p className="text-paragraph">
              Xung quanh dự án là hệ sinh thái tự nhiên độc đáo: hồ Tảo Hồng,
              suối nhỏ len lỏi giữa cảnh quan xanh mát, sân cỏ mở trải dài, giúp
              cư dân và du khách cảm nhận nhịp sống “sống chậm, sống chất” giữa
              thiên nhiên Bảo Lộc.
            </p>
            <p className="text-paragraph">
              Ngoài ra, Làng Omm còn sở hữu vị trí đắc địa khi kết nối nhanh đến
              các tiện ích ngoại khu như chợ, trường học, trung tâm hành chính
              xã và các điểm du lịch nổi tiếng như đồi chè Tâm Châu, Tu viện Bát
              Nhã và thác Dambri, chỉ cách vài phút lái xe.
            </p>
          </div>
        </div>

        {/* Swiper Slider Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center swiper-container">
          <Swiper
            pagination={{ dynamicBullets: true, clickable: true }}
            modules={[Pagination]}
            className="w-full max-w-[450px]"
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="py-8 swiper-slide-content">
                  <div className="md:w-[450px] bg-gradient-to-l from-[#41A347] via-[#336532] to-[#3F6D34] rounded-tl-[40px] rounded-br-[40px] pt-4 pl-4">
                    <Image
                      src={item.image}
                      alt={`Làng Omm - ${item.title}`}
                      className="w-full rounded-tl-[32px] rounded-br-[32px] object-cover"
                      priority={index === 0}
                    />
                    <div className="py-4 text-center text-white font-semibold text-lg">
                      {item.title}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TienIch;
