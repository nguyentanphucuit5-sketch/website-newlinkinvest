"use client";
import React, { useRef } from "react";
import sodo from "../../assets/kieubykita/sodoKieu.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const SoDoDiChuyen = () => {
  // Reference for scroll tracking
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Trigger when component enters/exits viewport
  });

  // Smooth animations for opacity and scale
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, 1]), {
    stiffness: 100,
    damping: 20,
  });
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3], [0.9, 1]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
      ref={ref}
      style={{
        background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
        opacity, // Subtle fade-in for the entire container
      }}
      className={`py-14 px-2 md:py-24 border-t border-b border-[#E8C395] mx-auto`}
    >
      <div className={`w-full max-w-[1000px] mx-auto flex justify-center`}>
        <motion.div
          style={{ opacity, scale }} // Fade-in and scale-up for the image
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={sodo} alt={`Sơ đồ di chuyển Kiều By Kita`} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SoDoDiChuyen;
