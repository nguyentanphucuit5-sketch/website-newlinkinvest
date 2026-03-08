"use client";
import { LaHomeSP } from "@/utils/lahome";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SanPham = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for main title
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for border
  const borderVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for section title
  const sectionTitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for details and description
  const detailsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for measurements
  const measurementVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4 + i * 0.1, // Staggered delay for each measurement
      },
    }),
  };

  // Animation variants for images
  const imageVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -50 : 50,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
  };

  return (
    <div
      className="w-full max-w-[1300px] mx-auto pt-10 md:pt-20 px-4 md:px-20 text-black"
      ref={ref}
    >
      <motion.div
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[24px] md:text-[32px]"
      >
        Sản Phẩm
      </motion.div>
      <motion.div
        variants={borderVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="border border-[#05A89D] w-full"
      ></motion.div>
      <div className="space-y-10">
        {LaHomeSP.map((item, index) => {
          const sectionRef = useRef(null);
          const sectionInView = useInView(sectionRef, {
            once: true,
            margin: "-100px",
          });

          return (
            <div key={index} className="" ref={sectionRef}>
              <motion.h3
                variants={sectionTitleVariants}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                className="py-3 md:py-5 font-bold text-[#39A9A1] text-[20px] md:text-[24px]"
              >
                {item.title}
              </motion.h3>
              <div className="space-y-5">
                <motion.div
                  variants={detailsVariants}
                  initial="hidden"
                  animate={sectionInView ? "visible" : "hidden"}
                  className="w-full flex flex-col md:flex-row space-x-0 md:space-x-10"
                >
                  <div className="w-full md:w-[50%]">
                    <div className="flex items-center space-x-2 justify-between">
                      <div className="text-[20px] py-4 px-2 font-bold border-r">
                        {item.detail}
                      </div>
                      <div>{item.desc}</div>
                    </div>
                    <motion.div
                      variants={imageVariants}
                      custom="left"
                      initial="hidden"
                      animate={sectionInView ? "visible" : "hidden"}
                      className="md:hidden"
                    >
                      <Image
                        src={item.image}
                        alt={`${item.title} - LaHome - NewLink Investment`}
                        width={2000}
                        height={2000}
                        className="w-full h-full py-5"
                      />
                    </motion.div>
                  </div>
                  <div className="w-full md:w-[50%] flex flex-col justify-center">
                    <motion.div
                      custom={0}
                      variants={measurementVariants}
                      initial="hidden"
                      animate={sectionInView ? "visible" : "hidden"}
                    >
                      Kích thước điển hình: {item.kt}
                    </motion.div>
                    <motion.div
                      custom={1}
                      variants={measurementVariants}
                      initial="hidden"
                      animate={sectionInView ? "visible" : "hidden"}
                    >
                      Diện tích: {`\n${item.s}`}
                    </motion.div>
                    <motion.div
                      custom={2}
                      variants={measurementVariants}
                      initial="hidden"
                      animate={sectionInView ? "visible" : "hidden"}
                    >
                      Tổng diện tích sàn xây dựng: {item.ts}
                    </motion.div>
                    <motion.div
                      variants={imageVariants}
                      custom="right"
                      initial="hidden"
                      animate={sectionInView ? "visible" : "hidden"}
                      className="md:hidden"
                    >
                      <Image
                        src={item.image2}
                        alt={`${item.title} - LaHome - NewLink Investment`}
                        width={2000}
                        height={2000}
                        className="w-full h-full py-5"
                      />
                    </motion.div>
                  </div>
                </motion.div>
                <div className="w-full flex space-x-0 md:space-x-10">
                  <motion.div
                    variants={imageVariants}
                    custom="left"
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    className="w-[50%] hidden md:block"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} - LaHome - NewLink Investment`}
                      width={2000}
                      height={2000}
                      className="w-full h-full"
                    />
                  </motion.div>
                  <motion.div
                    variants={imageVariants}
                    custom="right"
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    className="w-[50%] hidden md:block"
                  >
                    <Image
                      src={item.image2}
                      alt={`${item.title} - LaHome - NewLink Investment`}
                      width={2000}
                      height={2000}
                      className="w-full h-full"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SanPham;
