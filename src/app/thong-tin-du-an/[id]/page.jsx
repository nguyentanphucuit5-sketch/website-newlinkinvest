import TTDAIDComponent from "@/components/Thong-Tin-Du-An/TTDAIDComponent";
import React from "react";

export const metadata = {
  title: "Thông Tin Dự án - NewLink Investment",
  description:
    "Cập nhật đầy đủ thông tin dự án từ NewLink Investment: hình ảnh, tài liệu, vị trí và thông tin liên hệ chi tiết.",
  alternates: {
    canonical: "thong-tin-du-an",
  },
};

const ThongTinDuAnID = () => {
  return <TTDAIDComponent />;
};

export default ThongTinDuAnID;
