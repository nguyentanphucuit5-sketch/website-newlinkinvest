"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SoDoMatBang = () => {
  // Reference for scroll tracking
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Trigger when component enters/exits viewport
  });

  // Smooth animations for opacity, position, and scale
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 1]), {
    stiffness: 100,
    damping: 20,
  });
  const yTitle = useSpring(useTransform(scrollYProgress, [0, 0.3], [50, 0]), {
    stiffness: 100,
    damping: 20,
  });
  const scaleSwiper = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.95, 1]), {
    stiffness: 100,
    damping: 20,
  });
  const yImage = useSpring(useTransform(scrollYProgress, [0, 0.3], [50, 0]), {
    stiffness: 100,
    damping: 20,
  });
  const xInfo = useSpring(useTransform(scrollYProgress, [0, 0.3], [50, 0]), {
    stiffness: 100,
    damping: 20,
  });

  const data = [
    {
      image:
          "https://w.ladicdn.com/s900x750/5c7362c6c417ab07e5196b05/anh-b-20241210034052-bn7-d.png",
      info: [
        "01.Lối vào",
        "02.Vườn tiểu cảnh",
        "03.Bảng hiệu dự án",
        "04.Tiểu cảnh trang trí",
        "05.Trạm sạc xe điện dự kiến",
        "06.Lối xe xuống hầm",
        "07.Lối ra",
        "08.Sảnh đón/Trả khách",
        "09.Sảnh tiếp khách cư dân",
        "10.Lễ tân",
        "11.Mail box",
        "12.Khu vực hàng ship",
        "13.Sảnh thang máy",
        "14.Restroom",
        "15.Thang máy cư dân",
        "16.Thang hàng",
        "17.Thang xuống tầng hầm",
      ],
      title: "TẦNG TRỆT",
    },
    {
      image:
          "https://w.ladicdn.com/s900x700/5c7362c6c417ab07e5196b05/13f-20241211100406-j7koj.png",
      info: [
        "01.GYM",
        "02.Yoga",
        "03.Kidsroom",
        "04.Thư viện, Co-working ",
        "05.Phòng Sauna thư giãn",
        "06.Locker Room",
        "07.Thang thông tầng",
        "08.Sảnh tầng",
        "09.Restroom",
        "10.Văn phòng BQL",
        "11.Phòng kỹ thuật",
        "12.Thang máy",
        "13.Thang thoát hiểm",
      ],
      title: "TẦNG 12A",
    },
    {
      image:
          "https://w.ladicdn.com/s900x700/5c7362c6c417ab07e5196b05/12f-20241211100406-ysrdm.png",
      info: [
        "01.Hồ bơi Sky view",
        "02.Hồ bơi trẻ em",
        "03.Ghế ngồi thư giãn",
        "04.Ghế tắm nắng",
        "05.Thang thông tầng",
        "06.Phòng tiếp khách",
        "07.Phòng yến tiệc",
        "08.Khu tiếp khách ngoài trời",
        "09.Sky Garden",
        "10.Cigar lounge",
        "11.Tiểu cảnh trang trí",
        "12.Nhà vệ sinh",
        "13.Phòng thay đồ/WC",
        "14.Thang máy",
        "15.Thang thoát hiểm",
      ],
      title: "TẦNG 12B",
    },
    {
      image:
          "https://w.ladicdn.com/s900x650/5c7362c6c417ab07e5196b05/ban-20241211094648-krlpl.png",
      info: [
        "01.Căn hộ 03 phòng ngủ loại A - Số lượng 20 căn",
        "02.Căn hộ 03 phòng ngủ loại B - Số lượng 10 căn",
        "03.Căn hộ 03 phòng ngủ loại C - Số lượng 20 căn",
        "04.Căn hộ 02 phòng ngủ loại D - Số lượng 20 căn",
      ],
      title: "TẦNG ĐIỂN HÌNH 14-13",
    },
    {
      image:
          "https://w.ladicdn.com/s850x700/5c7362c6c417ab07e5196b05/duplex-20241211095209-kl6jm.png",
      info: [""],
      title: "TẦNG DUPLEX 1",
    },
    {
      image:
          "https://w.ladicdn.com/s800x750/5c7362c6c417ab07e5196b05/duplex-2-20241211095209-14bjm.png",
      info: [""],
      title: "TẦNG DUPLEX 2",
    },
    {
      image:
          "https://w.ladicdn.com/s850x700/5c7362c6c417ab07e5196b05/penthouse-2-20241211095209-htqtm.png",
      info: [""],
      title: "TẦNG PENTHOUSE 1",
    },
    {
      image:
          "https://w.ladicdn.com/s700x750/5c7362c6c417ab07e5196b05/penthouse-3-20241211095209-mp9y-.png",
      info: [""],
      title: "TẦNG PENTHOUSE 2",
    },
  ];

  return (
      <motion.div
          ref={ref}
          style={{
            background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
            opacity, // Subtle fade-in for the entire component
          }}
          className={`p-2 py-16 md:py-10 w-full h-full md:h-screen flex flex-col justify-center items-center`}
      >
        <motion.h2
            style={{ opacity, y: yTitle }}
            className="pb-8 font-pd-bold text-[24px] md:text-[32px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent"
        >
          SƠ ĐỒ MẶT BẰNG CÁC TẦNG
        </motion.h2>

        <motion.div
            style={{ opacity, scale: scaleSwiper }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-[1000px] w-full"
        >
          <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                renderBullet: (index, className) => {
                  return `<span class="${className}">${index + 1}</span>`;
                },
              }}
              className="w-full h-full bg-[#FDF6E9] rounded-2xl shadow-2xl py-12 px-6"
          >
            {data.map((item, index) => (
                <SwiperSlide key={index} className="bg-[#FDF6E9] h-full">
                  <div className={`flex flex-col md:flex-row`}>
                    <motion.div
                        style={{ opacity, y: yImage }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full max-w-[350px] md:max-w-[600px] mx-auto aspect-[4/3] mt-10"
                    >
                      <Image
                          src={item.image}
                          alt={`Sơ đồ ${item.title}`}
                          fill
                          className="object-contain rounded-md"
                          sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </motion.div>
                    <div className={`min-w-[350px]`}>
                      <motion.div
                          style={{ opacity, x: xInfo }}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className={`max-w-[400px] text-[14px] md:text-[20px] mx-auto text-center md:text-start md:mt-4 text-black font-bold`}
                      >
                        {item.title}
                      </motion.div>
                      <motion.div
                          style={{ opacity, x: xInfo }}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="grid grid-cols-2 gap-4 mt-6 font-pd-regular text-gray-700 max-w-[350px] md:max-w-[400px] pb-8 mx-auto text-sm md:text-base"
                      >
                        {item.info.map((info, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * idx + 0.3, duration: 0.5 }} // Staggered delay for each item
                                className="flex items-center justify-start"
                            >
                              <p className="text-[13px] hover:text-blue-600 transition-colors">
                                {info}
                              </p>
                            </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
            ))}
          </Swiper>
          <motion.div
              style={{ opacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="custom-pagination mt-4 flex justify-center gap-2"
          ></motion.div>
        </motion.div>

        <style jsx global>{`
          .custom-pagination .swiper-pagination-bullet {
            background: transparent;
            color: #ffffff;
            opacity: 0.7;
            width: 24px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            border-radius: 180px;
            transition: all 0.3s;
          }
          .custom-pagination .swiper-pagination-bullet:hover {
            opacity: 1;
            background: rgba(255, 255, 255, 0.2);
            cursor: pointer;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background: #fdf6e9;
            color: #000000;
            opacity: 1;
          }
        `}</style>
      </motion.div>
  );
};

export default SoDoMatBang;