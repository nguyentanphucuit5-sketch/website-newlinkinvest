"use client";
import Background from "@/components/Lang-Omm/Background";
import ChuDauTu from "@/components/Lang-Omm/ChuDauTu";
import LienHe from "@/components/Lang-Omm/LienHe";
import TienIch from "@/components/Lang-Omm/TienIch";
import TongQuan from "@/components/Lang-Omm/TongQuan";
import ViTri from "@/components/Lang-Omm/ViTri";
import ViTriChiTiet from "@/components/Lang-Omm/ViTriChiTiet";
import React, { useEffect } from "react";
import Nen1 from "../../assets/langomm/Nen1.png";
import Nen2 from "../../assets/langomm/Nen2.png";
import Tab from "@/components/Lang-Omm/Tab";
import HoatDong from "@/components/Lang-Omm/HoatDong";
import ChinhSachThanhToan from "@/components/Lang-Omm/ChinhSachThanhToan";
import ChinhSachThanhToanSecond from "@/components/Lang-Omm/ChinhSachThanhToanSecond";
import Footer from "@/components/Lang-Omm/Footer";

const LangOmm = () => {
  return (
    <div className="bg-[#FFFFFF] h-full w-full text-black">
      <Background />
      {/* Vùng có nền */}
      <div
        style={{
          backgroundImage: `url(${Nen1.src})`,
          backgroundRepeat: "repeat-y", // 🔥 Cho phép lặp theo chiều dọc
          backgroundSize: "contain", // Hoặc "auto", để giữ nguyên kích thước ảnh
          backgroundPosition: "center top",
        }}
      >
        <div className="h-[50px] md:h-[150px]"></div>
        <TongQuan />
        <div className="h-[50px] md:h-[150px]"></div>
        <ViTri />
        <div className="h-[50px] md:h-[150px]"></div>
        <ViTriChiTiet />
        <div className="h-[50px] md:h-[150px]"></div>
        <TienIch />
        <div className="h-[50px] md:h-[150px]"></div>
        <Tab />
        <div className="h-[50px] md:h-[150px]"></div>
        <HoatDong />
        <div className="h-[50px] md:h-[150px]"></div>
        <ChinhSachThanhToan />
        <ChinhSachThanhToanSecond />
      </div>
      <Footer />
    </div>
  );
};

export default LangOmm;
