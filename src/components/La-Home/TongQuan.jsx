"use client";
import { LaHomeTQ } from "@/utils/lahome";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const TongQuan = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for subtitle
  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  // Animation variants for grid items
  const gridItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.4 + i * 0.1, // Staggered delay for each item
      },
    }),
  };

  // Animation variants for 6 Phân Khu section
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8, // Delayed after grid items
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="text-black w-full h-full" ref={ref}>
      <div className="flex flex-col items-center md:py-10">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[20px] md:text-[32px] font-bold"
        >
          TỔNG QUAN DỰ ÁN
        </motion.h2>
        <motion.h3
          variants={subtitleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-[12px] md:text-[16px] max-w-[720px] text-center pt-2 md:pt-4 px-5"
        >
          LA Home được quy hoạch đồng bộ bởi các nhà tư vấn quy hoạch quốc tế
          chuyên nghiệp nhằm kiến tạo một khu đô thị sinh thái bền vững, nơi cư
          dân có thể tận hưởng cuộc sống hài hòa an yên giữa thiên nhiên trong
          lành, bên cạnh nhịp sống sôi động sầm uất.
        </motion.h3>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center pt-10 md:space-x-24">
          <div className="w-full md:w-[600px] mx-auto md:mx-8 grid grid-cols-3 gap-2 px-4 md:px-0">
            {LaHomeTQ.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={gridItemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-rows-3 items-center justify-items-center text-center"
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} LaHome - NewLink Investment`}
                  className="w-[40px] md:w-[60px]"
                />
                <div className="w-[100px] md:w-[150px] text-[12px] md:text-[16px] self-start">
                  {item.title}
                </div>
                <div className="text-[#05A89D] text-[24px] font-bold md:text-[32px] -mt-3 md:-mt-10">
                  {item.dt}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="md:w-[600px] p-4"
          >
            <div className="md:px-4 text-[20px] md:text-[32px] font-bold">
              <span className="text-[#05A89D] text-[32px] md:text-[52px] font-bold">
                6
              </span>{" "}
              Phân Khu
            </div>
            <div className="text-[12px] md:text-[18px] space-y-4">
              <p>
                LA Home tạo nên hình ảnh hoàn hảo về cuộc sống đô thị hiện đại,
                Với sự kết hợp tinh tế và hài hòa giữa cảnh sắc thiên nhiên sông
                nước trong lành, thuần khiết.
              </p>
              <p>
                Hơn cả một ngôi nhà, LA Home còn là nơi kết nối toàn diện với 6
                phân khu đô thị đặc trưng, sự kết nối này không chỉ tạo nên một
                môi trường sống đầy đủ tiện nghi, mà còn tạo điều kiện thuận lợi
                gắn kết cộng đồng xung quanh.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TongQuan;
