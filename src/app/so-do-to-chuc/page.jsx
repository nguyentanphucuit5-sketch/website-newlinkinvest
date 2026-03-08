import Footer from "@/components/Footer";
import SDComponent from "@/components/So-Do/SDComponent";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";
import React from "react";

export const metadata = {
  title: "Sơ Đồ Tổ Chức - NewLink Investment",
  description:
    "Tìm hiểu chi tiết sơ đồ tổ chức của NewLink Invest - cấu trúc quản lý, đội ngũ lãnh đạo và các phòng ban.",
  alternates: {
    canonical: "https://newlinkinvest.com/so-do-to-chuc",
  },
};

const SoDo = () => {

  return (
    <div>
      <SDComponent />

    </div>
  );
};

export default SoDo;
