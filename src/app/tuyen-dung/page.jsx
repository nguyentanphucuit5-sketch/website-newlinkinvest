import BannerTD from "@/components/Tuyen-Dung/BannerTD";
import TuyenDungComponent from "@/components/Tuyen-Dung/TuyenDungComponent";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";
import React from "react";

export const metadata = {
  title: "Tuyển Dụng - Cơ hội nghề nghiệp tại NewLink Investment",
  description:
    "Khám phá cơ hội việc làm hấp dẫn tại New Link Investment. Chúng tôi luôn tìm kiếm nhân tài trong lĩnh vực công nghệ, tài chính và năng lượng.",
  keywords: [
    "Tuyển dụng New Link",
    "việc làm công ty New Link",
    "New Link Investment tuyển dụng",
    "tuyển dụng công nghệ",
    "tuyển dụng Thủ Đức",
  ],
  alternates: {
    canonical: "https://newlinkinvest.com/tuyen-dung",
  },
};

const TuyenDung = () => {
  return (
    <div>
      <TuyenDungComponent />
      {/* <BannerTD /> */}
    </div>
  );
};

export default TuyenDung;
