"use client";
import React, { useRef } from "react";
import logo1 from "../../assets/kieubykita/bgTongQuan2.png";
import logo2 from "../../assets/kieubykita/bgTongQuan3.png";
import pt1 from "../../assets/kieubykita/bgTongQuan1.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const TongQuanKieu = () => {
  // Reference for scroll tracking
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Trigger when component enters/exits viewport
  });

  // Smooth animations for opacity and position
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 1]), {
    stiffness: 100,
    damping: 20,
  });
  const yTitle = useSpring(useTransform(scrollYProgress, [0, 0.3], [50, 0]), {
    stiffness: 100,
    damping: 20,
  });
  const yImage = useSpring(useTransform(scrollYProgress, [0, 0.3], [100, 0]), {
    stiffness: 100,
    damping: 20,
  });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.8, 1]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
      }}
      className={`p-2 py-16 md:py-10 w-full h-[90vh] md:h-screen flex flex-col justify-center items-center`}
    >
      <div
        className={`h-full min-w-[90vw] md:min-w-[900px] max-h-[600px] md:max-h-[670px] relative mx-auto rounded-3xl shadow-2xl border-r-2 border-black bg-[linear-gradient(to_right,_#61090A_0%,_#730C0D_20%,_#730C0D_80%,_#61090A_100%)]`}
      >
        <motion.h2
          style={{ opacity, y: yTitle }}
          className="font-pd-bold text-[24px] pt-8 md:pt-4 md:text-[32px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent"
        >
          TỔNG QUAN DỰ ÁN
        </motion.h2>
        <motion.div
          style={{ opacity, scale }}
          className={`flex justify-center items-center space-x-14 md:space-x-16 mt-4 md:pt-1`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src={logo1}
              alt={`Đơn Vị Thiết Kế Kiều By Kita - NewLink Investment`}
              className={`w-[60px] md:w-[100px]`}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image
              src={logo2}
              alt={`Đơn Vị Thi Công Kiều By Kita - NewLink Investment`}
              className={`w-[60px] md:w-[100px]`}
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{ opacity }}
          className={`pt-10 flex flex-col items-end`}
        >
          <div
            className={`border w-[180px] md:w-[400px] border-[#E8C395]`}
          ></div>
          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 0.3], [-100, 0]) }}
            className={`pt-6 md:pt-10 px-4 flex space-x-5`}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2
                className={`font-pd-bold text-[10px] md:text-[20px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent`}
              >
                CĂN HỘ ĐIỂN HÌNH
              </h2>
              <p className={`text-[10px] text-end md:text-[16px] mt-2`}>
                TẦNG 14 - 23
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h2
                className={`font-pd-bold text-[10px] md:text-[20px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent`}
              >
                DUPLEX - PENTHOUSE
              </h2>
              <p className={`text-[10px] text-end md:text-[16px] mt-2`}>
                TẦNG 24 - 27
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 0.3], [-100, 0]) }}
            className={`pt-6 md:pt-10 px-4 flex space-x-5`}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h2
                className={`font-pd-bold text-[10px] md:text-[20px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent`}
              >
                KHỐI VĂN PHÒNG
              </h2>
              <p className={`text-[10px] text-end md:text-[16px] mt-2`}>
                TẦNG 2 - 11
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2
                className={`font-pd-bold text-[10px] md:text-[20px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent`}
              >
                TIỆN ÍCH CƯ DÂN
              </h2>
              <p className={`text-[8px] text-end mt-2 md:text-[16px]`}>
                TẦNG 12A - 12B
              </p>
            </motion.div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h2
                className={`font-pd-bold text-[10px] md:text-[20px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent`}
              >
                SẢNH CƯ DÂN
              </h2>
              <p className={`text-[10px] md:text-[16px] text-end mt-2`}>
                TẦNG TRỆT
              </p>
            </motion.div>
          </motion.div>
          <div
            className={`border mt-5 w-[240px] md:w-[550px] border-[#E8C395]`}
          ></div>
          <motion.div
            style={{
              opacity,
              x: useTransform(scrollYProgress, [0, 0.3], [-100, 0]),
            }}
            className="px-2 md:px-10 pt-10 md:pt-4 grid grid-cols-[auto_1fr] text-[9px] md:text-[13px] max-w-[230px] md:max-w-[600px] gap-2 md:gap-x-6"
          >
            <div>VỊ TRÍ</div>
            <div>927 Trần Hưng Đạo, Phường 1 Quận 5, TP.HCM</div>
            <div>NHÀ PHÁT TRIỂN</div>
            <div>KITA Group</div>
            <div>QUY MÔ</div>
            <div>27 tầng nổi và 02 tầng hầm</div>
            <div>PHÂN BỔ TẦNG</div>
            <div>
              <p>Khối văn phòng (Tầng 2 - 11)</p>
              <p>Tiện ích cư dân (Tầng 12A - 12B)</p>
              <p>Căn hộ hạng sang (Tầng 14 - 27)</p>
            </div>
            <div>LOẠI HÌNH</div>
            <div>
              <p>Căn hộ 02, 03 phòng ngủ, Duplex, PentHouse</p>
            </div>
            <div>DIỆN TÍCH CĂN HỘ</div>
            <div>Từ 91.4m2 đến 350.5m2</div>
          </motion.div>
        </motion.div>

        <div className={`absolute inset-0 bottom-0 w-full h-full -z-0`}>
          <div
            className={`w-full h-full flex items-end rounded-3xl overflow-hidden`}
          >
            <motion.div
              style={{ opacity, y: yImage }}
              className="w-[140px] md:w-[300px]"
            >
              <Image
                src={pt1}
                alt={`Căn Hộ Kiều By Kita - NewLink Investment`}
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className={`border-[3px] w-[98vw] border-[#E8C395] `}></div>
    </motion.div>
  );
};

export default TongQuanKieu;
