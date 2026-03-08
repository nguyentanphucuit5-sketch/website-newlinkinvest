"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

// ảnh
import pc1 from "../../../public/uploads/images/duan/kieu-by-ta/canbangtrai.jpg";
import pc2 from "../../../public/uploads/images/duan/kieu-by-ta/canbanggiua.jpg";
import pc3 from "../../../public/uploads/images/duan/kieu-by-ta/canbangphai.jpg";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CanBangCuocSong = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const swiperRef = useRef(null);

    // ref cho nút prev / next (mỗi component tự giữ ref riêng)
    const prevBtnRef = useRef(null);
    const nextBtnRef = useRef(null);

    const slides = [
        { title: "PHÒNG GIẢI TRÍ", image: pc1 },
        { title: "PHÒNG GYM", image: pc2 },
        { title: "PHÒNG VUI CHƠI TRẺ EM", image: pc3 },
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
                CÂN BẰNG CUỘC SỐNG TẠI TẦNG 12A
            </h2>

            {/* tagline */}
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
                    <span>nâng cao </span>
                    <span className="text-[#EBC88F] font-pd-bold"> Sức Khỏe</span>
                    <span> gắn kết cùng nhau để xây dựng cuộc sống</span>
                    <span className="text-[#EBC88F] font-pd-bold"> Hạnh Phúc</span>
                    <span> viên mãn </span>
                </p>
            </div>

            {/* BUTTON TAB */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
                {["PHÒNG GIẢI TRÍ", "PHÒNG GYM", "PHÒNG VUI CHƠI TRẺ EM"].map(
                    (label, idx) => (
                        <button
                            key={idx}
                            onClick={() => swiperRef.current?.slideTo(idx)}
                            className={`
                px-8 py-3 rounded-xl border text-[14px] md:text-[16px] font-pd-bold transition
                ${activeIndex === idx
                                    ? "bg-[#EBC88F] text-[#3D0303] border-[#EBC88F]"
                                    : "border-[#EBC88F] text-[#EBC88F] hover:bg-[#EBC88F]/20"
                                }
              `}
                        >
                            {label}
                        </button>
                    ),
                )}
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
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        loop={false}
                        centeredSlides
                        spaceBetween={24}
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
                                        alt={`${item.title} - Tien Ich Dang Cap Tang 12B - Kieu By Kita`}
                                        className="w-full h-full object-cover"
                                    />
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

export default CanBangCuocSong;
