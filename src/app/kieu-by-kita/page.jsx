import BackgroundKieu from "@/components/Kieu-By-Kita/BackgroundKieu";
import React from "react";
import Link from "next/link";
import TongQuanKieu from "@/components/Kieu-By-Kita/TongQuanKieu";
import ViTriKieu from "@/components/Kieu-By-Kita/ViTriKieu";
import SoDoDiChuyen from "@/components/Kieu-By-Kita/SoDoDiChuyen";
import SoDoMatBang from "@/components/Kieu-By-Kita/SoDoMatBang";
import BoSuuTap from "@/components/Kieu-By-Kita/BoSuuTap";
import SanhDon from "@/components/Kieu-By-Kita/SanhDon";
import TienIchDangCap from "@/components/Kieu-By-Kita/TienIchDangCap";
import CanBangCuocSong from "@/components/Kieu-By-Kita/CanBangCuocSong";
import LienHe from "@/components/Kieu-By-Kita/LienHe";
import BackNic from "@/components/BackNic";
import CauChuyen from "@/components/Kieu-By-Kita/CauChuyen";
import DichVuDangCap from "@/components/Kieu-By-Kita/DichVuDangCap";

export const metadata = {
  title: "Dự Án Kiều By Kita | NewLink Investment",
  description:
    "Kiều By Kita là kiệt tác kiến trúc độc đáo tọa lạc trên đại lộ Trần Hưng Đạo, Sài Gòn. Khám phá dự án với vị trí đắc địa, tiện ích đẳng cấp và phong cách sống hiện đại.",
  alternates: {
    canonical: "https://newlinkinvest.com/kieu-by-kita",
  },
  openGraph: {
    type: "website",
    url: "https://newlinkinvest.com/kieu-by-kita",
    title: "Dự Án Kiều By Kita | NewLink Investment",
    description:
      "Kiều By Kita là kiệt tác kiến trúc độc đáo tọa lạc trên đại lộ Trần Hưng Đạo, Sài Gòn. Khám phá dự án với vị trí đắc địa, tiện ích đẳng cấp và phong cách sống hiện đại.",
    images: [
      {
        url: "https://w.ladicdn.com/s450x400/5c7362c6c417ab07e5196b05/kieu-by-kita-20241209040611-nv6pm.png",
        width: 1200,
        height: 630,
        alt: "Hình ảnh dự án Kiều By Kita - NewLink Investment",
      },
    ],
    site_name: "NewLink Investment",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NewLinkInvestment",
    title: "Kiều By Kita - Dự Án Bất Động Sản Cao Cấp | NewLink Investment",
    description:
      "Khám phá dự án Kiều By Kita - một kiệt tác kiến trúc độc đáo tại trung tâm Sài Gòn với tiện ích đẳng cấp và phong cách sống hiện đại.",
    images: [
      {
        url: "https://w.ladicdn.com/s450x400/5c7362c6c417ab07e5196b05/kieu-by-kita-20241209040611-nv6pm.png",
        alt: "Hình ảnh dự án Kiều By Kita - NewLink Investment",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords:
    "Kiều By Kita, Dự án bất động sản, NewLink Investment, Bất động sản Sài Gòn, Dự án cao cấp, Đầu tư bất động sản",
  author: "NewLink Investment",
  publisher: "NewLink Investment",
};

const KieuByKita = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #3D0303, #821212, #3D0303)",
        minHeight: "100vh",
      }}
    >
      <BackgroundKieu />
      <CauChuyen />
      <TongQuanKieu />
      <ViTriKieu />
      <SoDoDiChuyen />
      <SoDoMatBang />
      <BoSuuTap />
      <SanhDon />
      <TienIchDangCap />
      <CanBangCuocSong />
      <DichVuDangCap />
      <LienHe />

      <BackNic />
    </div>
  );
};

export default KieuByKita;
