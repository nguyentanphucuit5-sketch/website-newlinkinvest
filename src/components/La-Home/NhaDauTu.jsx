"use client";
import React, { useRef } from "react";
import cdt from "../../assets/lahome/cdt.png";
import npt from "../../assets/lahome/npt.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const NhaDauTu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.2, // Stagger effect
      },
    }),
  };

  return (
    <div className="relative w-full h-[400px] md:h-[220px]" ref={ref}>
      <div className="absolute inset-0 -top-28 md:-top-32">
        <div className="flex flex-col items-center md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-5 px-4">
          <motion.div
            custom={0} // First card
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#05A89D] rounded-3xl w-[320px] h-[200px] md:w-[500px] md:h-[300px] p-4 space-y-2 md:space-y-4"
          >
            <p className="font-bold text-[16px] md:text-[24px]">Chủ Đầu Tư</p>
            <Image
              src={cdt}
              alt="Chủ Đầu Tư LaHome - NewLink Investment"
              className="w-[80px] md:w-[120px] -mt-2"
            />
            <div className="text-[10px] md:text-[14px]">
              LA Home là tâm huyết được phát triển dựa trên sự hợp tác giữa Chủ
              đầu tư - Công ty Cổ phần Prodezi Long An và Đơn vị phát triển -
              Công ty Cổ phần Tư vấn Đầu tư Hướng Việt (HVH).
            </div>
            <div className="text-[10px] md:text-[14px]">
              HVH đã thành công phát triển nhiều dự án trải dài khắp cả nước,
              bao gồm Tòa nhà văn phòng Hạng A+ The Hallmark (TP HCM), Khu công
              nghiệp Prodezi (Long An)… Với nhiều năm kinh nghiệm, HVH còn hợp
              tác phát
            </div>
          </motion.div>

          <motion.div
            custom={1} // Second card
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-[#05A89D] rounded-3xl w-[320px] h-[200px] md:w-[500px] md:h-[300px] p-4 space-y-2 md:space-y-4"
          >
            <p className="font-bold text-[16px] md:text-[24px]">
              Nhà Phát Triển
            </p>
            <Image
              src={npt}
              alt="Nhà Phát Triển LaHome - NewLink Investment"
              className="w-[80px] md:w-[120px] -mt-3 -ml-4 md:-ml-5"
            />
            <div className="text-[10px] md:text-[14px]">
              Phát triển nhiều dự án nhà ở với các đối tác uy tín. Đặc biệt, nổi
              bật là sự hợp tác trong việc phát triển các dự án bất động sản nhà
              ở danh tiếng cùng SonKim Land như Serenity Sky Villas và Metropole
              Thủ Thiêm.
            </div>
            <div className="text-[10px] md:text-[14px]">
              Uy tín của HVH là cam kết vững chắc đối với sự thành công của LA
              Home nhằm kiến tạo nên một khu đô thị sinh thái bền vững ngay tại
              cửa ngõ Tây Nam Thành phố Hồ Chí minh
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NhaDauTu;
