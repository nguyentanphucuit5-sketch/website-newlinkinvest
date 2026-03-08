"use client";
import { LaHomeTT } from "@/utils/lahome";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const ItemDuAn = () => {
  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for description
  const descVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for left image (even index)
  const leftImageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  // Animation variants for right image (odd index)
  const rightImageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
    },
  };

  // Animation variants for bottom images
  const bottomImageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6 + i * 0.2, // Staggered delay
      },
    }),
  };

  // Animation variants for mobile-only image
  const mobileImageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.8 },
    },
  };

  return (
    <div>
      {LaHomeTT.map((item, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, margin: "-100px" });

        return (
          <div
            key={index}
            className={`${index % 2 ? "bg-[#05A89D] text-white" : "bg-white text-black"} h-[550px] md:h-[500px] px-4 md:px-20`}
            ref={ref}
          >
            <div className="w-full h-full max-w-[1200px] mx-auto flex items-center justify-between md:space-x-2">
              <motion.div
                variants={leftImageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`${index % 2 === 0 ? "flex" : "hidden max-md:hidden"} max-md:hidden w-[400px] justify-center`}
              >
                <Image
                  src={item.image1}
                  alt={`${item.title} - LaHome - NewLink Investment`}
                  width={400}
                  height={400}
                  className="w-[350px] h-[350px] rounded-3xl object-cover"
                />
              </motion.div>
              <div className="w-[720px] space-y-3">
                <motion.h3
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-[20px] md:text-[28px] font-bold"
                >
                  {item.title}
                </motion.h3>
                <motion.h4
                  variants={descVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-[12px] md:text-[16px]"
                >
                  {item.desc}
                </motion.h4>
                <div className="flex justify-center flex-row space-x-2 md:space-x-3">
                  <motion.div
                    custom={0}
                    variants={bottomImageVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <Image
                      src={item.image2}
                      alt={`${item.title} - LaHome - NewLink Investment`}
                      width={1000}
                      height={1000}
                      className="w-full h-[90px] md:w-[360px] md:h-[180px] rounded-xl object-cover"
                    />
                  </motion.div>
                  <motion.div
                    custom={1}
                    variants={bottomImageVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    <Image
                      src={item.image3}
                      alt={`${item.title} - LaHome - NewLink Investment`}
                      width={1000}
                      height={1000}
                      className="w-full h-[90px] md:w-[360px] md:h-[180px] rounded-xl object-cover"
                    />
                  </motion.div>
                </div>
                <motion.div
                  variants={mobileImageVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex justify-center min-md:hidden"
                >
                  <Image
                    src={item.image1}
                    alt={`${item.title} - LaHome - NewLink Investment`}
                    width={400}
                    height={400}
                    className="w-full h-[200px] rounded-xl object-cover"
                  />
                </motion.div>
              </div>
              <motion.div
                variants={rightImageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`${index % 2 !== 0 ? "flex" : "hidden"} max-md:hidden w-[400px] justify-center`}
              >
                <Image
                  src={item.image1}
                  alt={`${item.title} - LaHome - NewLink Investment`}
                  width={400}
                  height={400}
                  className="w-[350px] h-[350px] rounded-3xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDuAn;
