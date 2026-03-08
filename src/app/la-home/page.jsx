import BackNic from "@/components/BackNic";
import BackgroundLaHome from "@/components/La-Home/BackgroundLaHome";
import GiaoDiem from "@/components/La-Home/GiaoDiem";
import ItemDuAn from "@/components/La-Home/ItemDuAn";
import LienHe from "@/components/La-Home/LienHe";
import NhaDauTu from "@/components/La-Home/NhaDauTu";
import SanPham from "@/components/La-Home/SanPham";
import TienIch from "@/components/La-Home/TienIch";
import TongQuan from "@/components/La-Home/TongQuan";
import TongThe from "@/components/La-Home/TongThe";
import React from "react";

export const metadata = {
  title: "Dự Án La Home | NewLink Investment",
  description:
    "LA Home được quy hoạch đồng bộ bởi các nhà tư vấn quy hoạch quốc tế chuyên nghiệp nhằm kiến tạo một khu đô thị sinh thái bền vững, nơi cư dân có thể tận hưởng cuộc sống hài hòa an yên giữa thiên nhiên trong lành, bên cạnh nhịp sống sôi động sầm uất.",
  alternates: {
    canonical: "https://newlinkinvest.com/la-home",
  },
  openGraph: {
    type: "website",
    url: "https://newlinkinvest.com/la-home",
    title: "Dự Án La Home | NewLink Investment",
    description:
      "LA Home được quy hoạch đồng bộ bởi các nhà tư vấn quy hoạch quốc tế chuyên nghiệp nhằm kiến tạo một khu đô thị sinh thái bền vững, nơi cư dân có thể tận hưởng cuộc sống hài hòa an yên giữa thiên nhiên trong lành, bên cạnh nhịp sống sôi động sầm uất.",
    images: [
      {
        url: "https://lahome.com.vn/wp-content/themes/lahome/assets/img/logo.svg",
        width: 1200,
        height: 630,
        alt: "Hình ảnh dự án La Home - NewLink Investment",
      },
    ],
    site_name: "NewLink Investment",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NewLinkInvestment",
    title: "Dự Án La Home | NewLink Investment",
    description:
      "LA Home được quy hoạch đồng bộ bởi các nhà tư vấn quy hoạch quốc tế chuyên nghiệp nhằm kiến tạo một khu đô thị sinh thái bền vững, nơi cư dân có thể tận hưởng cuộc sống hài hòa an yên giữa thiên nhiên trong lành, bên cạnh nhịp sống sôi động sầm uất.",
    images: [
      {
        url: "https://lahome.com.vn/wp-content/themes/lahome/assets/img/logo.svg",
        alt: "Hình ảnh dự án La Home - NewLink Investment",
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

const LaHome = () => {
  
  return (
    <div
      style={{
        background: "#ffffff",
        minHeight: "100vh",
      }}
      className="relative"
    >
      <BackgroundLaHome />
      <NhaDauTu />
      <TongQuan />
      <TongThe />
      <ItemDuAn />
      <GiaoDiem />
      <TienIch />
      <SanPham />
      <LienHe />
      <BackNic />
    </div>
  );
};

export default LaHome;
