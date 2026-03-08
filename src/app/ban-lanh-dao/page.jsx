import BanLanhDao from "@/components/Ban-Lanh-Dao/BanLanhDao";
import React, { Suspense } from "react";

export const metadata = {
  title: "Ban Lãnh Đạo - NewLink",
  alternates: {
    canonical: "https://newlinkinvest.com/ban-lanh-dao",
  },
};

const BanLanhDaoPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <BanLanhDao />
      </Suspense>
   
    </div>
  );
};

export default BanLanhDaoPage;
