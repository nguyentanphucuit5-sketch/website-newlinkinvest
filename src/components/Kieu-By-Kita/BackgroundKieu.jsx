"use client";

import Image from "next/image";
import { motion } from "motion/react";
import useTrackUserIP from "@/hooks/TrackerIP/useTrackUserIP";

const BackgroundKieu = () => {
  useTrackUserIP();

  return (
    <div
      style={{
        backgroundImage:
          "url('https://w.ladicdn.com/s1440x1050/5c7362c6c417ab07e5196b05/1048-20241209045115-n8epm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[910px] md:h-[1050px] w-[100vw]"
    >
      <div
        className={`w-[100vw] h-full md:min-w-[1000px] md:max-w-[1500px] mx-auto relative`}
      >
        <div
          className={`w-[100vw] h-full  md:max-w-[1000px] md:mx-auto relative pt-40 md:pt-32 `}
        >
          <div className={`w-full md:w-[600px] flex flex-col items-center `}>
            <div className="relative">
              <Image
                src={`https://w.ladicdn.com/s400x400/5c7362c6c417ab07e5196b05/kieu-by-kita-20241209040611-nv6pm.png`}
                alt={`Logo Kieu By Kita`}
                width={1000}
                height={1000}
                className="w-[90px] md:w-[130px] object-contain"
              />
              <motion.div
                animate={{
                  scale: [1, 0.8, 1],
                  x: [-20, 10, -40, -20], // Di chuyển qua trái (-10px) rồi qua phải (10px) rồi về vị trí ban đầu
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeIn",
                }}
                className={`absolute -top-10 -right-[100px] md:-right-[200px] z-40`}
              >
                <Image
                  src={`https://w.ladicdn.com/s400x450/5c7362c6c417ab07e5196b05/buom-buom-20241209040603-ilybd.png`}
                  alt={`Hoa Kieu By Kita`}
                  width={1000}
                  height={1000}
                  className="w-[70px] md:w-[100px] "
                />
              </motion.div>
            </div>
            <Image
              src={`https://w.ladicdn.com/s950x500/5c7362c6c417ab07e5196b05/nang-tho-20241209040603-eoln-.png`}
              alt={`Nang Tho Kieu By Kita`}
              width={1000}
              height={1000}
              className="w-[300px] md:w-[550px] object-contain"
            />
            <div className={`relative h-[25px] md:h-[40px] mt-3`}>
              <Image
                src={`https://w.ladicdn.com/s950x350/5c7362c6c417ab07e5196b05/gradient-1-20241209041359-uz7fk.png`}
                alt={`Screen Kieu By Kita`}
                width={1000}
                height={1000}
                className="w-[400px] md:w-[650px] h-[25px] md:h-[40px]  "
              />
              <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center font-pd-bold text-[12px] md:text-[20px]"
                style={{
                  background:
                    "url('https://w.ladicdn.com/5c7362c6c417ab07e5196b05/graident-2-20241209041557-bf0vy.png')",
                  backgroundSize: "cover",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                }}
              >
                Náo nhiệt ngoài ngưỡng cửa - Riêng tư ngay thềm nhà
              </div>
              <motion.div
                className="absolute -top-3.5 -right-[110px] "
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Image
                  src={`https://w.ladicdn.com/s800x350/5c7362c6c417ab07e5196b05/screen-3-20241209040603-dylev.png`}
                  alt={`Ảnh Nhấp Nháy Kieu By Kita`}
                  width={1000}
                  height={1000}
                  className=" w-[500px] h-[25px]"
                />
              </motion.div>

              <motion.div
                className="absolute -bottom-3.5 -left-[110px] "
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Image
                  src={`https://w.ladicdn.com/s800x350/5c7362c6c417ab07e5196b05/screen-3-20241209040603-dylev.png`}
                  alt={`Ảnh Nhấp Nháy Kieu By Kita`}
                  width={1000}
                  height={1000}
                  className="w-[500px] h-[25px]"
                />
              </motion.div>
            </div>
            <div className={`mt-4 grid grid-cols-2 gap-2 md:gap-6 px-2`}>
              <div
                className={`border p-1 rounded-lg w-[180px] md:w-[220px] border-[#C98A67]`}
              >
                <div
                  className={`border h-full p-2 rounded-lg flex space-x-3 text-[#C98A67]`}
                >
                  <motion.div
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`w-[30px] `}
                  >
                    <Image
                      src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/sih-20241209042918-m-pph.png`}
                      alt={`Dấu Tích Kieu By Kita`}
                      width={1000}
                      height={1000}
                      className="w-[30px]  "
                    />
                  </motion.div>
                  <p className={`w-[190px] text-[12px] md:text-[16px] `}>
                    <span className={`font-bold text-[#D9A582]`}>
                      100% Sổ hồng
                    </span>{" "}
                    sẵn sàng từng căn
                  </p>
                </div>
              </div>
              <div
                className={`border p-1 rounded-lg  w-[180px] md:w-[220px] border-[#C98A67]`}
              >
                <div
                  className={`border h-full p-2 rounded-lg flex space-x-3 text-[#C98A67]`}
                >
                  <motion.div
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`w-[30px] `}
                  >
                    <Image
                      src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/sih-20241209042918-m-pph.png`}
                      alt={`Dấu Tích Kieu By Kita`}
                      width={1000}
                      height={1000}
                      className="w-[30px] "
                    />
                  </motion.div>
                  <p className={`w-[190px] text-[12px] md:text-[16px]`}>
                    Bàn giao nhà
                    <span className={`font-bold text-[#D9A582]`}> Q1/2025</span>
                  </p>
                </div>
              </div>
              <div
                className={`border p-1 rounded-lg w-[180px] md:w-[220px] border-[#C98A67]`}
              >
                <div
                  className={`border h-full p-2 rounded-lg flex space-x-3 text-[#C98A67]`}
                >
                  <motion.div
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className={`w-[30px] `}
                  >
                    <Image
                      src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/sih-20241209042918-m-pph.png`}
                      alt={`Dấu Tích Kieu By Kita`}
                      width={1000}
                      height={1000}
                      className="w-[30px]  "
                    />
                  </motion.div>
                  <p className="w-[190px] text-[12px] md:text-[16px] ">
                    Mặt tiền{" "}
                    <span className={`font-bold text-[#D9A582]`}>
                      927 TRẦN HƯNG ĐẠO Q5
                    </span>
                  </p>
                </div>
              </div>
              <div
                className={`border p-1 rounded-lg w-[180px] md:w-[220px] border-[#C98A67]`}
              >
                <div
                  className={`border h-full p-2 rounded-lg flex space-x-3 text-[#C98A67]`}
                >
                  <motion.div
                    animate={{ scale: [1, 0.8, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-[30px] "
                  >
                    <Image
                      src={`https://w.ladicdn.com/s350x350/5c7362c6c417ab07e5196b05/sih-20241209042918-m-pph.png`}
                      alt={`Dấu Tích Kieu By Kita`}
                      width={1000}
                      height={1000}
                      className="w-[30px] "
                    />
                  </motion.div>
                  <p className="w-[190px] text-[12px] md:text-[16px]">
                    Chỉ
                    <span className={`font-bold text-[#D9A582]`}> 82</span> căn
                    hộ cao cấp
                  </p>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ scale: [1, 0.95, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="bg-gradient-to-l relative z-30 from-[#F3DBB8] via-[#FFFEFD] to-[#F3DBB8] mt-6 text-black py-2 px-4 rounded-3xl cursor-pointer font-bold text-[16px] md:text-[20px] hover:bg-white hover:text-black hover:from-white hover:via-white hover:to-white"
              onClick={() =>
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: "smooth",
                })
              }
            >
              THAM QUAN DỰ ÁN
            </motion.div>
          </div>
        </div>

        <div className={`absolute -top-10 -left-20 z-0`}>
          <Image
            src={`https://w.ladicdn.com/s800x800/5c7362c6c417ab07e5196b05/hoa-la-canh-20241209040604-oynrt.png`}
            alt={`Hoa Kieu By Kita`}
            width={1000}
            height={1000}
            className="w-[250px] md:w-[380px] object-contain"
          />
        </div>

        <div className={`absolute -top-10 -right-20 z-0`}>
          <Image
            src={`https://w.ladicdn.com/s500x500/5c7362c6c417ab07e5196b05/hoa-v-20241209040603-sxryt.png`}
            alt={`Hoa Kieu By Kita`}
            width={1000}
            height={1000}
            className="w-[250px] md:w-[380px] "
          />
        </div>

        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:translate-0  md:top-[180px] md:right-[105px] z-40 ">
          <div className="relative ">
            <div className="relative z-40">
              <Image
                src={`https://w.ladicdn.com/s850x1300/5c7362c6c417ab07e5196b05/toag-nha-20241211043907-x4xt-.png`}
                alt="Ảnh Tòa Nhà"
                width={1000}
                height={1000}
                className="w-[220px] md:w-[500px]"
              />
            </div>
            <motion.div
              animate={{
                rotate: [0, -20, 0],
                scale: [1, 0.95, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-20 md:bottom-40 -left-8 md:-left-14 z-30"
            >
              <Image
                src={`https://w.ladicdn.com/s600x600/5c7362c6c417ab07e5196b05/hoa-la-canh-b-20241209044850-ixbhp.png`}
                alt="Ảnh Hoa Đơn"
                width={1000}
                height={1000}
                className="w-[150px] md:w-[250px]"
              />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 0.99, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-10 -left-14 z-[41]"
            >
              <Image
                src={`https://w.ladicdn.com/s1200x850/5c7362c6c417ab07e5196b05/hoa-a-20241209040603-cwoku.png`}
                alt="Ảnh Hoa Chung"
                width={1000}
                height={1000}
                className="w-[850px] scale-150"
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-20">
          <Image
            src={`https://w.ladicdn.com/s1500x850/5c7362c6c417ab07e5196b05/den-1234-20241209040603-sqg21.png`}
            alt="Ảnh Phố Cổ"
            width={1000}
            height={1000}
            className="w-[950px]"
          />
        </div>
        <div className="absolute -bottom-40 left-0 z-[39] hidden md:block">
          <Image
            src={`https://w.ladicdn.com/s2500x1100/5c7362c6c417ab07e5196b05/2197-20241209044920-ofdgs.png`}
            alt="Ảnh Dây Đàn"
            width={1000}
            height={1000}
            className="w-[1440px] scale-3d"
          />
        </div>
      </div>
    </div>
  );
};

export default BackgroundKieu;
