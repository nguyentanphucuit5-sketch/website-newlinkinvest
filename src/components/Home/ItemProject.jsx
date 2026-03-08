import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import các module cần thiết của Swiper
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { DuAn } from "@/utils/data";
import gsap from "gsap"; // Import GSAP
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger); // Đăng ký plugin ScrollTrigger

const ImageSlider = () => {
  const [activeProjectName, setActiveProjectName] = useState(DuAn[0].name); // Default to first project name
  const [stretchValue, setStretchValue] = useState(-200);
  const swiperRef = useRef(null); // Ref để truy cập Swiper instance
  const sliderRef = useRef(null); // Thêm ref cho slider để dùng ScrollTrigger

  // Hàm cập nhật stretch dựa trên kích thước màn hình
  const updateStretch = () => {
    if (window.innerWidth >= 768) {
      setStretchValue(-150);
    } else {
      setStretchValue(-80);
    }
  };

  // Cập nhật stretch khi mount và resize
  useEffect(() => {
    updateStretch(); // Cập nhật ban đầu
    window.addEventListener("resize", () => {
      updateStretch();
      if (swiperRef.current) {
        swiperRef.current.update(); // Cập nhật Swiper khi resize
      }
    });

    return () => window.removeEventListener("resize", updateStretch);
  }, []);

  // Cập nhật Swiper khi stretchValue thay đổi
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update(); // Cập nhật Swiper khi stretchValue thay đổi
    }
  }, [stretchValue]);

  // GSAP animation cho ảnh
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;
    setActiveProjectName(DuAn[activeIndex]);

    // GSAP Animation: Phóng to và làm mờ ảnh khi thay đổi slide
    gsap.fromTo(
      ".swiper-slide-active img",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    );
  };

  useEffect(() => {
    // GSAP animation cho ảnh khi Swiper được khởi tạo
    gsap.fromTo(
      ".swiper-slide-active img",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  // GSAP animation khi cuộn đến phần tử
  useEffect(() => {
    gsap.fromTo(
      sliderRef.current,
      {
        opacity: 0, // Bắt đầu từ trạng thái ẩn
        y: 100, // Di chuyển từ dưới lên
      },
      {
        opacity: 1, // Cuối cùng có độ mờ 1 (hiển thị)
        y: 0, // Di chuyển đến vị trí ban đầu
        duration: 1.5, // Thời gian thực hiện hiệu ứng
        ease: "power3.out", // Loại easing
        scrollTrigger: {
          trigger: sliderRef.current, // Kích hoạt khi cuộn đến phần tử này
          start: "top 80%", // Bắt đầu hiệu ứng khi phần tử vào gần 80% chiều cao của viewport
          end: "top 20%", // Kết thúc hiệu ứng khi phần tử đến 20% chiều cao
          toggleActions: "play none none reverse", // Chạy hiệu ứng khi cuộn vào và đảo ngược khi cuộn ra
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="max-w-[1240px] mx-auto mt-6 md:pt-20" ref={sliderRef}>
        <h2 className="py-2 md:py-4 text-center text-[24px] md:text-[48px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
          Dự Án
        </h2>
        <div className="py-2 bg-[linear-gradient(to_right,#09303D_0%,#09303D_20%,#0C5E77_50%,#09303D_80%,#09303D_100%)] text-center">
          <div className="flex justify-center py-2">
            <div>
              {activeProjectName?.logo ? (
                <Image
                  src={activeProjectName.logo}
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="h-[30px] md:h-[50px] object-contain"
                />
              ) : (
                <div className="w-[70px] md:w-[140px] bg-gray-200 flex items-center justify-center">
                  <span>No Logo</span>
                </div>
              )}
            </div>
          </div>
          <p className="font-medium text-[12px] md:font-[16px] mt-2">
            {activeProjectName.desc}
          </p>
        </div>
      </div>
      <Swiper
        key={stretchValue} // Thay đổi key để tái tạo Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: -20,
          stretch: stretchValue,
          depth: 500,
          modifier: 1,
          slideShadows: false, // Tắt bóng mờ
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow]}
        style={{ width: "100%", padding: "20px" }}
        onSlideChange={handleSlideChange} // Gọi hàm animation khi slide thay đổi
        onInit={handleSlideChange} // Gọi hàm animation khi Swiper khởi tạo
      >
        {DuAn.map((image, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide-custom" // Responsive với Tailwind
            style={{
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Link href={`${image.link}`}>
              <Image
                src={image.image}
                alt={image.alt}
                className="object-cover rounded-lg md:max-w-[1000px] md:max-h-[480px] mx-auto"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
