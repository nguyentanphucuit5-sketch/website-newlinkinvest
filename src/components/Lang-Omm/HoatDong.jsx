"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import HD1 from "../../assets/langomm/HD1.jpg";
import HD2 from "../../assets/langomm/HD2.jpg";
import HD3 from "../../assets/langomm/HD3.jpg";
import HD4 from "../../assets/langomm/HD4.jpg";
import HD5 from "../../assets/langomm/HD5.jpg";
import Image from "next/image";

export default function HoatDong() {
  return (
    <div className="hoatdong-swiper">
      <div className="w-full text-center pb-5 text-[24px] md:text-[48px] font-ftv-blushing-rose text-white">
        CÁC HOẠT ĐỘNG Ở LÀNG OMM
      </div>
      <div className="w-full flex justify-center backdrop-blur-md bg-white/10 ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={100}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 0,
            modifier: 2,
            slideShadows: true,
          }}
          loop={true}
          pagination={false}
          autoplay={{
            delay: 3000, // 3 giây chuyển 1 slide
            disableOnInteraction: false, // không dừng khi người dùng tương tác
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full max-w-[1400px] mySwiper"
        >
          {[HD1, HD2, HD3, HD4, HD5].map((img, index) => (
            <SwiperSlide
              key={index}
              className="!w-[300px] md:!w-[700px] !h-[200px] md:!h-[350px] rounded-[20px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`HD${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .hoatdong-swiper .swiper {
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            padding-top: 50px;
            padding-bottom: 70px;
          }

          .hoatdong-swiper .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 700px;
            height: 500px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease;
          }

          .hoatdong-swiper .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hoatdong-swiper .swiper-slide-active {
            transform: scale(1.2);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          }

          .hoatdong-swiper .swiper-pagination {
            bottom: 10px !important;
          }

          .hoatdong-swiper .swiper-pagination-bullet {
            background: rgba(255, 255, 255, 0.5);
            width: 10px;
            height: 10px;
            opacity: 1;
            transition: all 0.3s ease;
          }

          .hoatdong-swiper .swiper-pagination-bullet-active {
            background: #ffffff;
            width: 14px;
            height: 14px;
            border-radius: 10px;
          }
        `}</style>
      </div>
    </div>
  );
}
