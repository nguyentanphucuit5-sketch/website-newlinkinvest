"use client";
import React from "react";
import bg from "../../assets/lahome/bg.png";
import logo from "../../assets/lahome/logo.png";
import Image from "next/image";
import { motion } from "motion/react";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";

const BackgroundLaHome = () => {
   useTrackUserIP(); 
  
  // Animation variants for the background image
  const bgVariants = {
    initial: { scale: 1.1, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Animation variants for the logo
  const logoVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  // Animation variants for the text
  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <motion.div variants={bgVariants} initial="initial" animate="animate">
        <Image
          src={bg}
          alt="Background La Home - NewLink Investment"
          className="w-full h-[120vh] object-cover"
        />
      </motion.div>

      <div
        className="absolute top-0 left-0 w-full h-[35vh] md:h-[40vh]"
        style={{
          background:
            "linear-gradient(0deg, rgba(5, 168, 157, 0) 0%, rgba(5, 168, 157, 0.5) 35%, rgba(5, 168, 157, 1) 100%)",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-[35vh] md:h-[40vh] flex flex-col justify-center items-center space-y-3">
        <motion.div variants={logoVariants} initial="initial" animate="animate">
          <Image
            src={logo}
            alt="La Home Logo - NewLink Investment"
            className="w-[180px] md:w-[280px]"
          />
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-center text-[16px] md:text-[20px]"
        >
          Khu đô thị <span className="font-bold">Sinh Thái Bền vững</span>{" "}
          <br /> Kiến tạo
          <span className="font-bold"> Phong Cách Sống Cân bằng</span>
        </motion.div>
      </div>
    </div>
  );
};

export default BackgroundLaHome;
