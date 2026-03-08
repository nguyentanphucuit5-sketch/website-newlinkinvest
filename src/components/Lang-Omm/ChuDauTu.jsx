"use client";

import React, { useEffect, useRef } from "react";
import logocdt from "@/assets/langomm/logocdt.png";
import chudautu from "@/assets/langomm/chudautu.png";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ChuDauTu = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo và text từ trái vào
      gsap.from(logoRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Hình ảnh từ phải vào
      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-[1440px] mx-auto h-full flex flex-col md:flex-row pt-10 px-2 space-y-5 md:space-y-0"
    >
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <Image
          ref={logoRef}
          src={logocdt}
          alt="Logo CĐT"
          className="w-[160px] md:w-[440px]"
        />
        <div ref={textRef} className="max-w-[400px] mx-auto">
          <h2 className="font-ftv-blushing-rose text-[28px] md:text-[39px] text-[#3C6B33]">
            CHỦ ĐẦU TƯ
          </h2>
          <p className="text-[14px] md:text-[16px]">
            <span className="font-bold">
              Công ty Cổ phần Đầu tư – Phát triển Địa ốc An Thịnh Phát (ATP
              Group)
            </span>{" "}
            là đơn vị uy tín chuyên đầu tư và phát triển các dự án đất nền, nhà
            phố tại Bình Dương và Bình Phước. Với phương châm “Uy tín đặt lên
            hàng đầu – Pháp lý rõ ràng”, An Thịnh Phát luôn đảm bảo minh bạch
            trong mọi khâu từ triển khai đến bàn giao. Trên chặng đường phát
            triển, An Thịnh Phát không chỉ kiến tạo giá trị bất động sản mà còn
            tích cực đồng hành cùng cộng đồng.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          ref={imageRef}
          src={chudautu}
          alt="Chủ Đầu Tư"
          width={1000}
          height={1000}
          className="w-[570px] border-[8px] rounded-[16px] border-[#3C6B33]"
        />
      </div>
    </div>
  );
};

export default ChuDauTu;
