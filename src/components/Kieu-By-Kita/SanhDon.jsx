"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

// ảnh
import pc1 from "../../../public/uploads/images/duan/kieu-by-ta/sanhthang.jpg";
import pc2 from "../../../public/uploads/images/duan/kieu-by-ta/sanhchinh.jpg";
import pc3 from "../../../public/uploads/images/duan/kieu-by-ta/letan.jpg";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const SanhDon = () => {

  const [activeIndex, setActiveIndex] = useState(1);
  const swiperRef = useRef(null);

  // ref cho nút prev / next (mỗi component tự giữ ref riêng)
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  const slides = [
    { title: "THƯ VIỆN", image: pc1 },
    { title: "GYM - YOGA", image: pc2 },
    { title: "KHU VUI CHƠI TRẺ EM", image: pc3 },
  ];

  return (
    <div
      style={{
        background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
      }}
      className="p-2 py-16 md:py-20 w-full h-full flex flex-col items-center text-black"
    >
   {/* Tiêu đề */}
            <h2
                className="pb-4 pt-5 md:pt-16 font-pd-bold text-[20px] md:text-[34px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent uppercase tracking-[0.12em]"
            >
                SẢNH ĐÓN XỨNG TẦM
            </h2>

      {/* dòng mô tả */}
      <div className="w-full flex justify-center">
        <p
          className="text-center text-[14px] md:text-[18px] font-pd-regular max-w-[1200px]"
          style={{
            padding: "20px 80px",
            background: "linear-gradient(to right, #821212 0%, #3D0303 100%)",
            color: "#ffffff",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, white 20%, white 80%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, white 20%, white 80%, transparent 100%)",
          }}
        >
          <span>sảnh tiếp đón </span>
          <span className="text-[#EBC88F] font-pd-bold">5 Sao</span>
          <span> sang trọng - nơi tôn vinh </span>
          <span className="text-[#EBC88F] font-pd-bold">Đẳng Cấp</span>
          <span> và khẳng định vị thế gia chủ</span>
        </p>
      </div>

      {/* BUTTON TAB */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        {["Sảnh Thang", "Sảnh Tiếp Khách", "Lễ Tân"].map((label, idx) => (
          <button
            key={idx}
            onClick={() => swiperRef.current?.slideTo(idx)}
            className={`
        px-8 py-3 rounded-xl border text-[16px] font-pd-bold transition
        ${activeIndex === idx
                ? "bg-[#EBC88F] text-[#3D0303] border-[#EBC88F]"
                : "border-[#EBC88F] text-[#EBC88F] hover:bg-[#EBC88F]/20"}
      `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* SLIDER */}
      <div className="w-full flex justify-center mt-12">
        <div className="relative w-full max-w-[1100px]">
          {/* nút prev/next custom */}
          <button
            className="sanhdon-prev hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/60 text-white/80"
            aria-label="Prev"
            ref={prevBtnRef}
          >
            ‹
          </button>
          <button
            className="sanhdon-next hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-white/60 text-white/80"
            aria-label="Next"
            ref={nextBtnRef}
          >
            ›
          </button>

          <Swiper
            modules={[Navigation]}
            // gắn navigation bằng ref -> không “dính” sang Swiper khác
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevBtnRef.current;
              swiper.params.navigation.nextEl = nextBtnRef.current;
            }}
            navigation={{
              prevEl: prevBtnRef.current,
              nextEl: nextBtnRef.current,
            }}
            initialSlide={activeIndex}
            // lưu instance để button tab dùng swiperRef.current.slideTo(...)
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            // mỗi lần đổi slide thì cập nhật activeIndex (cho 3 nút tab)
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            loop={false}
            centeredSlides
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              768: {
                slidesPerView: 1.6,
              },
              1024: {
                slidesPerView: 2.4,
              },
            }}
            className="w-full py-6 sanhdon-swiper"
          >
            {slides.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="new-mb relative w-[260px] md:w-[360px] lg:w-full h-[260px] md:h-[310px] rounded-3xl overflow-hidden bg-black/40 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <Image
                    src={item.image}
                    alt={`${item.title} - Kieu By Kita - NewLink Investment`}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 px-4 py-3 text-white z-10 bg-gradient-to-t from-black/60 to-transparent font-bold">
                    {item.title}
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    {/* CSS nội bộ cho nút next/prev */}
            <style jsx>{`
        .sanhdon-prev,
        .sanhdon-next {
          position: absolute;
          top: 50%;
          color: #fff;
          font-size: 50px;
          cursor: pointer;
          border: 0;
        }
        
          @media screen and (max-width: 768px) {
           .new-mb{
              width:100%;
           }
          }     
        .sanhdon-prev {
          left: 50%;
          transform: translate(-270px, -50%);
        }

        .sanhdon-next {
          left: 50%;
          transform: translate(230px, -50%);
        }
      `}</style>

            {/* CSS global cho hiệu ứng slide giữa to hơn */}
            <style jsx global>{`
        .sanhdon-swiper .swiper-slide {
          transition: transform 0.4s ease, opacity 0.4s ease;
          transform: scale(0.75);
          opacity: 0.6;
        }

        .sanhdon-swiper .swiper-slide-active {
          transform: scale(1) !important;
          opacity: 1 !important;
        }

        .sanhdon-swiper .swiper-slide-prev,
        .sanhdon-swiper .swiper-slide-next {
          transform: scale(0.8);
          opacity: 0.8;
        }
      `}</style>

    </div>

  );

};



export default SanhDon;
