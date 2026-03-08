"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import nic from "@/assets/images/NICmini.png";
import Link from "next/link";

const BackNic = () => {
  return (
    <Link href="/du-an">
      <motion.button
        className="fixed text-[12px] md:text-[16px] w-[60px] h-[60px] rounded-full bottom-2 right-2 bg-white text-black px-4 py-1 shadow-lg cursor-pointer z-50"
        whileHover={{
          scale: 1.15,
          rotate: 5, // Xoay nhẹ khi hover
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)", // Tăng đổ bóng
          backgroundColor: "#f0f0f0", // Đổi màu nền nhẹ
        }}
        whileTap={{ scale: 0.9, rotate: -10 }} // Nhỏ lại và xoay ngược khi click
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image src={nic} alt="nic" className="w-[30px] md:w-[50px]" />
      </motion.button>
    </Link>
  );
};

export default BackNic;
