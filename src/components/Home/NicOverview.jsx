"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NicOverview = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef); // selector nội bộ

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.from(q(".heading"), { y: 50, opacity: 0 })
      .from(q(".subheading"), { y: 30, opacity: 0 }, "-=0.5")
      .from(q(".text-block"), { y: 20, opacity: 0, stagger: 0.3 }, "-=0.4");
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-50 py-5 md:py-10 px-2 mt-20  lg:px-0 "
    >
      <div>
        <h1 className="heading text-[42px] lg:text-[80px] font-utm-avo-bold  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
          NEWLINK
        </h1>
        <br />
        <h2 className="subheading block font-utm-avo-bold text-[24px] lg:text-[40px] mt-[-32px] lg:mt-[-40px]">
          INVESTMENT
        </h2>
      </div>
      <div className="md:w-[430px] lg:w-[540px] space-y-4 relative z-50 mt-8 md:mt-14">
        <h3 className="text-block text-[12px] md:text-[16px] font-utm-avo">
          <span className="font-utm-avo-bold">NEWLINK </span> là công ty chuyên
          đầu tư và phát triển bất động sản, với sứ mệnh mang đến những cơ hội
          đầu tư tiềm năng và giá trị lâu dài cho khách hàng.{" "}
          <span className="font-utm-avo-bold">NEWLINK </span> tập trung vào việc
          phân phối độc quyền các dự án bất động sản uy tín, chất lượng cao từ
          các chủ đầu tư lớn trong ngành. Mục tiêu của công ty là xây dựng một
          mạng lưới phân phối vững mạnh và trở thành một đối tác chiến lược đáng
          tin cậy trong ngành bất động sản.
        </h3>
        <h3 className="text-block text-[12px] lg:text-[16px] font-utm-avo ">
          Bên cạnh hoạt động phân phối,{" "}
          <span className="font-utm-avo-bold">NEWLINK </span> cũng đang hướng
          đến phát triển các dự án bất động sản của riêng mình trong tương lai,
          với tầm nhìn trở thành nhà đầu tư và phát triển dự án hàng đầu trong
          ngành. <span className="font-utm-avo-bold">NEWLINK </span> cam kết đem
          lại những sản phẩm và dịch vụ vượt trội, đáp ứng nhu cầu ngày càng cao
          của thị trường bất động sản và sự kỳ vọng của khách hàng.
        </h3>
      </div>
    </div>
  );
};

export default NicOverview;
