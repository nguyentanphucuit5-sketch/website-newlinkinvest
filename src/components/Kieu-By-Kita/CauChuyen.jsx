"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
const CauChuyen = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://w.ladicdn.com/s1440x1050/5c7362c6c417ab07e5196b05/1048-20241209045115-n8epm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[1000px] md:h-[1250px] w-[100vw] relative"
    >
      <div className=" w-[100vw] h-full  md:max-w-[1440px]  md:mx-auto relative pt-40 md:pt-20  ">
        <div className="w-[100vw] h-full md:max-w-[1000px] md:mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-[550px] flex items-center  flex-col relative z-40">
            <p className="font-mv-regular font-light text-[32px] md:text-[60px] ">
              Câu chuyện
            </p>

            <p className="font-ps-regular text-[60px] md:text-[90px] -mt-2 md:-mt-6 text-[#E9C496]">
              Kiều{" "}
              <span className="text-[40px] md:text-[60px] font-br-regular">
                By
              </span>{" "}
              Kita
            </p>
            <div className="absolute top-40 -left-40 z-[29] ">
              <Image
                src={`https://w.ladicdn.com/s800x800/5c7362c6c417ab07e5196b05/hoa-bb-20241209172534-ybjcw.png`}
                alt="Ảnh Hoa Sen"
                width={1000}
                height={1000}
                className="w-[340px] "
              />
            </div>
          </div>
          <div className="w-full md:w-[450px] px-4 pt-5 text-center md:pt-18 space-y-5 text-white relative z-40 ">
            <p>
              Vươn mình kiêu hãnh trên đại lộ Trần Hưng Đạo phồn vinh, Kiều by
              KITA như một “nàng thơ” tuyệt đẹp tỏa sáng rực rỡ, là kiệt tác độc
              bản trên con đường trăm năm tuổi, được ví như điểm giao thoa giữa
              nhịp sống hiện đại và nét văn hóa Sài Gòn xưa.
            </p>
            <p>
              Vẻ đẹp trường tồn của Kiều by KITA được khắc họa tinh tế qua lối
              kiến trúc đương đại cùng tầm nhìn rộng thoáng ôm trọn vẻ đẹp của
              thành phố từ trên cao. Sở hữu vị trí đặc biệt hiếm có giữa lòng
              thành phố, náo nhiệt ngoài ngưỡng cửa – riêng tư ngay thềm nhà là
              giá trị tinh túy được Kiều by KITA trân trọng dành tặng những chủ
              nhân tinh hoa.
            </p>
            <p>
              Sự yên tĩnh và riêng tư tuyệt đối tại đây mang đến trải nghiệm
              sống đỉnh cao, nơi tái tạo năng lượng và chăm sóc tinh thần. Kiều
              by KITA không chỉ là nơi an cư mà còn là tài sản giá trị, bảo
              chứng cho thế hệ tương lai.
            </p>
            <motion.div
              animate={{
                scale: [1, 0.95, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-60 -left-60 z-[30] "
            >
              <Image
                src={`https://w.ladicdn.com/s550x450/5c7362c6c417ab07e5196b05/line-2-20241209064105-xgjiq.png`}
                alt="Ảnh Sợi 1"
                width={2000}
                height={2000}
                className="w-[240px] "
              />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 0.95, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-20 -right-60 z-[30] "
            >
              <Image
                src={`https://w.ladicdn.com/s600x450/5c7362c6c417ab07e5196b05/line-b-20241210180353-lxcrc.png`}
                alt="Ảnh Sợi 2"
                width={2000}
                height={2000}
                className="w-[240px] "
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 z-[10] ">
          <Image
            src={`https://w.ladicdn.com/s2250x1500/5c7362c6c417ab07e5196b05/52-20241211071703-5skz6.png`}
            alt="Ảnh Thành Phố"
            width={2000}
            height={2000}
            className="w-[1440px] "
          />
        </div>
      </div>
    </div>
  );
};

export default CauChuyen;
