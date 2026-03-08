"use client";
import React, { useRef } from "react";
import giaodiem from "../../assets/lahome/giaodiem.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const GiaoDiem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for background image
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Animation variants for top gradient overlay
  const topGradientVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for bottom gradient overlay
  const bottomGradientVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  // Animation variants for connection points
  const pointVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6 + i * 0.2, // Staggered delay for each point
      },
    }),
  };

  return (
    <div className="relative w-full" ref={ref}>
      <div className="w-full h-[700px] md:h-full bg-white max-w-[1440px] mx-auto relative">
        <div className="w-full h-full flex items-end">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Image
              src={giaodiem}
              alt="Giao Điểm La Home - NewLink Investment"
              className="w-full"
            />
          </motion.div>
        </div>
        <motion.div
          className="h-[300px] md:h-[35vh] w-full absolute inset-0 flex flex-col md:flex-row justify-center items-center text-black z-40"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={titleVariants}
            className="w-full md:w-[50%] flex justify-center text-center text-[#4AC1BA] font-bold text-[20px] md:text-[28px] pb-5 md:pb-0"
          >
            Giao Điểm Kết Nối <br /> Cửa Ngõ Thành Phố
          </motion.div>
          <div className="w-full md:w-[50%] space-y-3 md:space-y-5 text-[12px] md:text-[16px] px-4 md:px-0">
            {[
              {
                title: "Đường Lương Hòa - Bình Chánh",
                desc: "Kết nối trực tiếp vào Trần Đại Nghĩa, Tỉnh lộ 10, Võ Văn Kiệt, Quốc Lộ 1A, Nguyễn Văn Linh đi về các khu vực trung tâm TP HCM",
              },
              {
                title: "Đường DT830",
                desc: "Kết nối vào Cao tốc TP HCM - Trung Lương và Bến Lức - Long Thành, từ đó kết nối vào TP HCM, các tỉnh Đồng bằng Sông Cửu Long, Đồng Nai, Bà Rịa - Vũng Tàu.",
              },
              {
                title: "Đường Vành đai 3 và Vành đai 4",
                desc: "Liên kết vùng TP HCM - Long An - Đồng Nai - Bình Dương",
              },
            ].map((point, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={pointVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <h3 className="font-bold">{point.title}</h3>
                <h4>{point.desc}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="absolute -top-1 left-0 w-full h-[500px] md:h-[40vh] z-20"
        style={{
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 35%, rgba(255, 255, 255, 1) 100%)",
        }}
        variants={topGradientVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      ></motion.div>
      <motion.div
        className="absolute -bottom-1 left-0 w-full h-[10%] md:h-[40vh] z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.6) 35%, rgba(255, 255, 255, 1) 100%)",
        }}
        variants={bottomGradientVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      ></motion.div>
    </div>
  );
};

export default GiaoDiem;
