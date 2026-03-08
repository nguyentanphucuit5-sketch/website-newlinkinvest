"use client";
import React, { useRef } from "react";
import Image from "next/image";
import map from "../../assets/kieubykita/mapKieu.png";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const ViTriKieu = () => {
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
  const xText = useSpring(useTransform(scrollYProgress, [0, 0.3], [50, 0]), {
    stiffness: 100,
    damping: 20,
  });
  const yMap = useSpring(useTransform(scrollYProgress, [0, 0.3], [100, 0]), {
    stiffness: 100,
    damping: 20,
  });
  const scaleDecor = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.9, 1]),
    {
      stiffness: 100,
      damping: 20,
    },
  );

  return (
    <motion.div
      ref={ref}
      style={{
        background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
      }}
      className="p-2 py-16 md:py-10 w-full h-[80vh] md:h-screen flex justify-center items-center"
    >
      <div className="h-full overflow-hidden relative min-w-[90vw] md:min-w-[900px] md:max-w-[930px] min-h-[550px] max-h-[650px] md:max-h-[650px] mx-auto rounded-3xl shadow-2xl border-[4px] border-[#E8C395] bg-[linear-gradient(to_right,_#61090A_0%,_#730C0D_20%,_#730C0D_80%,_#61090A_100%)] flex flex-col justify-between">
        <div className="px-4 pt-16 md:px-6 md:pt-6 absolute z-40">
          <motion.h2
            style={{ opacity, y: yTitle }}
            className="font-pd-bold text-[24px] md:text-[38px] bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent"
          >
            <span>VỊ TRÍ ĐẮC ĐỊA</span> <br /> <span>KẾT NỐI HOÀN MỸ</span>
          </motion.h2>
          <motion.h3
            style={{ opacity, x: xText }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="pt-2 max-w-[350px] md:max-w-[370px] text-[13px]"
          >
            Tọa lạc tại vị trí đắt giá trên Đại lộ Trần Hưng Đạo - tuyến đường
            huyết mạch 100 năm lịch sử, là nơi kết nối giao thương kinh tế, văn
            hóa trọng điểm của Sài Gòn xưa và nay.
          </motion.h3>
          <motion.h3
            style={{ opacity, x: xText }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-2 max-w-[370px] text-[13px]"
          >
            Từ đây, những chủ nhân của Kiều by KITA dễ dàng tiếp cận đến mọi
            tiện ích và các điểm check-in nổi tiếng của Sài Thành chỉ trong vài
            phút di chuyển.
          </motion.h3>
        </div>
        <motion.div
          style={{ opacity, y: yMap }}
          className="absolute bottom-0 right-0"
        >
          <Image
            src={map}
            alt="Map Kieu By Kita - NewLink Investment"
            className="w-[650px] object-contain"
          />
        </motion.div>
        <motion.div
          style={{ opacity, scale: scaleDecor }}
          initial={{ rotate: 70, opacity: 0, scale: 0.9 }}
          animate={{ rotate: 75, opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute -top-16 -right-20"
        >
          <Image
            src={`https://w.ladicdn.com/s800x800/5c7362c6c417ab07e5196b05/hoa-la-canh-20241209040604-oynrt.png`}
            alt="Map Kieu By Kita - NewLink Investment"
            width={1000}
            height={1000}
            className="w-[330px] object-contain "
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ViTriKieu;
