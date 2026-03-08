import BackNic from "@/components/BackNic";
import Background from "@/components/River-Park/Background";
import BanHang from "@/components/River-Park/BanHang";
import Footer from "@/components/River-Park/Footer";
import Header from "@/components/River-Park/Header";
import HienDai from "@/components/River-Park/HienDai";
import MatBang from "@/components/River-Park/MatBang";
import NhaPhoFirst from "@/components/River-Park/NhaPhoFirst";
import NhaPhoSecond from "@/components/River-Park/NhaPhoSecond";
import ThanhTo from "@/components/River-Park/ThanhTo";
import ThanhToan from "@/components/River-Park/ThanhToan";
import ThanhToSecond from "@/components/River-Park/ThanhToSecond";
import TienIch from "@/components/River-Park/TienIch";
import TuVan from "@/components/River-Park/TuVan";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";
import React from "react";

export const metadata = {
  title: "Dự Án River Park | NewLink Investment",
  description:
    "Tọa lạc ngay cửa ngõ khu Tây TP.HCM, Khu đô thị sinh thái LA Home ôm trọn vị thế đắc địa với mặt tiền Đại lộ Lương Hòa Bình Chánh.",
  alternates: {
    canonical: "https://newlinkinvest.com/river-park",
  },
  openGraph: {
    type: "website",
    url: "https://newlinkinvest.com/la-home",
    title: "Dự Án River Park | NewLink Investment",
    description:
      "Tọa lạc ngay cửa ngõ khu Tây TP.HCM, Khu đô thị sinh thái LA Home ôm trọn vị thế đắc địa với mặt tiền Đại lộ Lương Hòa Bình Chánh.",
    images: [
      {
        url: "https://gqcpthirugibortsrptn.supabase.co/storage/v1/object/public/image-website/Background.png",
        width: 1200,
        height: 630,
        alt: "Hình ảnh dự án River Park - NewLink Investment",
      },
    ],
    site_name: "NewLink Investment",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NewLinkInvestment",
    title: "Dự Án River Park | NewLink Investment",
    description:
      "Tọa lạc ngay cửa ngõ khu Tây TP.HCM, Khu đô thị sinh thái LA Home ôm trọn vị thế đắc địa với mặt tiền Đại lộ Lương Hòa Bình Chánh.",
    images: [
      {
        url: "https://gqcpthirugibortsrptn.supabase.co/storage/v1/object/public/image-website/Background.png",
        alt: "Hình ảnh dự án River Park - NewLink Investment",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    "La Home, Dự án bất động sản, NewLink Investment, Bất động sản Long An, Dự án cao cấp, Đầu tư bất động sản",
  author: "NewLink Investment",
  publisher: "NewLink Investment",
};

const RiverParkPage = () => {
  return (
    <div className="bg-[#E4F7FB] w-full h-full text-black">
      <Header />
      <div>
        <Background />
        <TienIch />
        <MatBang />
        <NhaPhoFirst />
        <NhaPhoSecond />
        <HienDai />
        <ThanhTo />
        <BanHang />
        <ThanhToan />
        <TuVan />
      </div>
      <Footer />
      <BackNic />
    </div>
  );
};

export default RiverParkPage;
