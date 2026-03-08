import BackNic from "@/components/BackNic";
import Footer from "@/components/River-Park/Footer";
import Header from "@/components/River-Park/Header";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className="bg-[#E4F7FB] w-full h-full text-black">
      <Header />
      <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
        <h1 className="text-[64px] font-bold text-[#00979C]">THANK YOU !</h1>
        <FaCheck size={80} color="#0BD400" />
        <p className="text-[20px] text-center ">
          Cảm ơn đã đăng kí tư vấn, chúng tôi sẽ sớm liên hệ lại với bạn!
        </p>
        <Link
          href={"/"}
          className="mt-4 bg-[#45ADB2] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#3c979c] transition cursor-pointer"
        >
          Quay lại trang website
        </Link>
      </div>
      <Footer />
      <BackNic />
    </div>
  );
};

export default ThankYou;
