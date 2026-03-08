"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const BoSuuTap = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  // 👉 thêm 2 state này
  const [modalSwiper, setModalSwiper] = useState(null);
  const [activeThumb, setActiveThumb] = useState(0);

  // ❗ Khóa scroll nền khi mở popup, trả lại khi đóng
  useEffect(() => {
    // Lưu overflow hiện tại của body (thường là "visible")
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }

    // Khi component unmount hoặc effect run lại → trả overflow về trạng thái ban đầu
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showModal]);

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
  const xButtons = useSpring(useTransform(scrollYProgress, [0, 0.3], [50, 0]), {
    stiffness: 100,
    damping: 20,
  });
  const scaleCarousel = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.95, 1]),
    {
      stiffness: 100,
      damping: 20,
    },
  );

  const data = [
    {
      title: "Căn Hộ Hạng Sang 02 và 03 Phòng Ngủ",
      detail: [
        {
          name: "Căn Hộ 03 Phòng Ngủ Loại A",
          image: [
            "https://w.ladicdn.com/s700x650/5c7362c6c417ab07e5196b05/artboard-123x-20241210043058-olhsm.png",
            "https://w.ladicdn.com/s800x700/5c7362c6c417ab07e5196b05/ahr-1-20241226092253-sibkw.jpg",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-52x-100-20241226091743-ipgpg.jpg",
            "https://w.ladicdn.com/s800x700/5c7362c6c417ab07e5196b05/snhaaf-20241226092253-qhxn2.jpg",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-22x-100-20241226091743-r5wuh.jpg",
          ],
          sThongThuy: 143.6,
          sTimTuong: 155,
        },
        {
          name: "Căn Hộ 03 Phòng Ngủ Loại B",
          image: [
            "https://w.ladicdn.com/s900x650/5c7362c6c417ab07e5196b05/artboard-133x-20241210043058-th75n.png",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-112x-100-20241226092657-zm50l.jpg",
            "https://w.ladicdn.com/s800x800/5c7362c6c417ab07e5196b05/artboard-82x-100-20241226092657-vlbf6.jpg",
            "https://w.ladicdn.com/s800x700/5c7362c6c417ab07e5196b05/artboard-92x-100-20241226092657-cpmal.jpg",
            "https://w.ladicdn.com/s800x750/5c7362c6c417ab07e5196b05/artboard-102x-100-20241226092657-wwx70.jpg",
          ],

            // 👉 ảnh nội thất riêng cho popup
            // test commit
          interiorImages: [
            "/uploads/images/duan/kieu-by-ta/canb/00.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/01.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/1.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/2.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/3.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/4.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/5.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/6.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/7.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/8.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/9.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/10.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/11.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/12.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/13.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/15.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/16.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/17.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/17a.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/18.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/19.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/20.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/21.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/22.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/23.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/24.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/25.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/27.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/28.jpg",
            "/uploads/images/duan/kieu-by-ta/canb/29.jpg",
          ],


          sThongThuy: 125.8,
          sTimTuong: 128,
        },
        {
          name: "Căn Hộ 03 Phòng Ngủ Loại C",
          image: [
            "https://w.ladicdn.com/s700x650/5c7362c6c417ab07e5196b05/artboard-143x-20241210043059-lowfz.png",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-122x-100-20241226093151-g4-0s.jpg",
            "https://w.ladicdn.com/s800x700/5c7362c6c417ab07e5196b05/artboard-132x-100-20241226093151-zyujq.jpg",
            "https://w.ladicdn.com/s800x600/5c7362c6c417ab07e5196b05/artboard-162x-100-20241226093151-ixmkd.jpg",
            "https://w.ladicdn.com/s800x900/5c7362c6c417ab07e5196b05/artboard-152x-100-20241226093151-qhenb.jpg",
          ],

           // 👉 ảnh nội thất riêng cho popup
          interiorImages: [
            "/uploads/images/duan/kieu-by-ta/kieu1.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu2.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu3.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu4.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu5.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu6.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu7.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu8.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu9.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu10.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu11.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu12.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu13.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu14.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu15.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu16.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu17.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu18.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu19.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu20.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu21.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu22.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu23.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu24.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu25.jpg",
            "/uploads/images/duan/kieu-by-ta/kieu26.jpg",
          ],


          sThongThuy: 122.8,
          sTimTuong: 132,
        },
        {
          name: "Căn Hộ 02 Phòng Ngủ Loại D",
          image: [
            "https://w.ladicdn.com/s700x650/5c7362c6c417ab07e5196b05/artboard-153x-20241210043059-pq2iy.png",
            "https://w.ladicdn.com/s800x650/669f0d456ba4a70011294c9f/8cf29fdcac19104749087-20250110092932-pihh6.jpg",
            "https://w.ladicdn.com/s800x700/669f0d456ba4a70011294c9f/0b78620e51cbed95b4da4-20250110092932-z7y9c.jpg",
            "https://w.ladicdn.com/s800x800/669f0d456ba4a70011294c9f/a4c2dc82ef4753190a565-20250110092932-65e0a.jpg",
          ],
          sThongThuy: 85.6,
          sTimTuong: 90,
        },
      ],
    },
    {
      title: "Duplex",
      detail: [
        {
          name: "Căn hộ 04 phòng ngủ - Loại A",
          image: [
            "https://w.ladicdn.com/s850x700/5c7362c6c417ab07e5196b05/anht-a-20241226100337-nt2yx.png",
            "https://w.ladicdn.com/s850x700/5c7362c6c417ab07e5196b05/anh-rb-20241211085242-pgw2z.png",
            "https://w.ladicdn.com/s800x600/5c7362c6c417ab07e5196b05/artboard-193x-100-20241211085300-1-xh2.jpg",
            "https://w.ladicdn.com/s800x600/5c7362c6c417ab07e5196b05/artboard-183x-100-20241211085300-omx7y.jpg",
            "https://w.ladicdn.com/s800x600/5c7362c6c417ab07e5196b05/artboard-173x-100-20241211085300-qp2sp.jpg",
            "https://w.ladicdn.com/s800x600/5c7362c6c417ab07e5196b05/artboard-183x-100-20241211085300-omx7y.jpg",
            "https://w.ladicdn.com/s800x600/5c7362c6c417ab07e5196b05/artboard-153x-100-20241211085300-v7jet.jpg",
          ],
          sThongThuy: 226.7,
          sTimTuong: 241,
        },
        {
          name: "Căn hộ 03 phòng ngủ - Loại B",
          image: [
            "https://w.ladicdn.com/s700x600/5c7362c6c417ab07e5196b05/can-20241211085545-qxd57.png",
            "https://w.ladicdn.com/s850x700/5c7362c6c417ab07e5196b05/tang-2-20241226101334--vzfa.png",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-243x-100-20241211085524-dap9c.jpg",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-233x-100-20241211085524-qyq23.jpg",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-223x-100-20241211085524-1qnfr.jpg",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/tam-20241211085659-nfl2o.jpg",
          ],

          sThongThuy: "176.5 - 180.4",
          sTimTuong: "185.5 - 190.4",
        },
      ],
    },
    {
      title: "Penthouse",
      detail: [
        {
          name: "Căn hộ PENTHOUSE",
          image: [
            "https://w.ladicdn.com/s800x600/5c7362c6c417ab07e5196b05/penthouse-20241211090154-bu8dr.png",
            "https://w.ladicdn.com/s650x600/5c7362c6c417ab07e5196b05/tang-2-20241226102531-rbaeu.png",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/anh-bc-20241211090154-wspbu.jpg",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-293x-100-20241211090148-mlxze.jpg",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-283x-100-20241211090148-kuqo5.jpg",
            "https://w.ladicdn.com/s800x650/5c7362c6c417ab07e5196b05/artboard-273x-100-20241211090147-nnfj_.jpg",
          ],
          sThongThuy: "330.9 - 346.1",
          sTimTuong: "335 - 348.5",
        },
      ],
    },
  ];

  return (
    <motion.div
      ref={ref}
      style={{
        background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
        opacity, // Subtle fade-in for the entire component
      }}
      className="p-2 py-10 md:py-10 w-full h-full md:h-full flex flex-col justify-center items-center text-black"
    >
      <motion.h2
        style={{ opacity, y: yTitle }}
        className="pb-8 pt-5 md:pt-32 font-pd-bold text-[18px] md:text-[32px] text-center bg-[linear-gradient(to_right,_#EFCF9F_0%,_#EDCC9C_8%,_#E8C395_13%,_#DFB488_17%,_#D39F76_21%,_#CE966E_22%,_#D29D74_27%,_#E7C193_54%,_#EFCF9F_68%,_#EBC899_69%,_#DEB286_75%,_#D5A278_82%,_#CF9870_90%,_#CE966E_100%)] bg-clip-text text-transparent"
      >
        BỘ SƯU TẬP CĂN HỘ HẠNG SANG <br /> ĐỘC ĐÁO NHẤT TỪ KITA GROUP
      </motion.h2>
      <motion.div
        style={{ opacity, x: xButtons }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10"
      >
        {data.map((item, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedIndex(index)}
            style={{ opacity, x: xButtons }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }} // Staggered delay for each button
            className={`p-2 px-4 text-[14px] md:text-[18px] font-bold rounded-3xl max-w-[250px] cursor-pointer ${selectedIndex === index
              ? "bg-[#FAD68C] text-[#3E0303]"
              : "bg-[#FDF6E9] text-[#3E0303] hover:bg-[#FEF4BD]"
              }`}
          >
            {item.title}
          </motion.button>
        ))}
      </motion.div>

      {selectedIndex !== null && (
        <motion.div
          style={{ opacity, scale: scaleCarousel }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-10 p-4 bg-[#FDF6E9] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 rounded-3xl  md:min-w-[1000px]"
        >
          {data[selectedIndex].detail.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i + 0.3, duration: 0.5 }} // Staggered delay for each card
              className="mt-2 p-4 rounded relative flex flex-col items-center"
            >
              <div className="relative w-[300px]">
                <Swiper
                  navigation={{
                    nextEl: `.swiper-button-next-${selectedIndex}-${i}`,
                    prevEl: `.swiper-button-prev-${selectedIndex}-${i}`,
                  }}
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="w-[300px]"
                >
                  {detail.image.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={detail.name}
                        className="w-full h-[300px] object-cover rounded-3xl"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button
                  className={`swiper-button-prev swiper-button-prev-${selectedIndex}-${i}`}
                ></button>
                <button
                  className={`swiper-button-next swiper-button-next-${selectedIndex}-${i}`}
                ></button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i + 0.5, duration: 0.5 }} // Slightly delayed for text
                className="space-y-2 flex items-center flex-col"
              >
                <h4 className="bg-[#3E0303] p-2 px-4 rounded-3xl text-[#FDF6E9] font-bold mt-4">
                  {detail.name}
                </h4>
                <div className="flex flex-col items-center text-[#3E0303] text-[14px]">
                  <p>
                    DIỆN TÍCH THÔNG THỦY:{" "}
                    <span className="font-bold">{detail.sThongThuy} m²</span>
                  </p>
                  <p>
                    DIỆN TÍCH TIM TƯỜNG:{" "}
                    <span className="font-bold">{detail.sTimTuong} m²</span>
                  </p>
                </div>
              </motion.div>
              {detail.interiorImages?.length > 0 && (
                <button
                  className="mt-2 px-6 py-2 border border-[#3E0303] rounded-3xl text-[#3E0303] font-bold hover:bg-[#FAD68C] hover:text-[#3E0303] transition"
                  onClick={() => {
                    // ưu tiên dùng interiorImages, nếu chưa có thì fallback sang image
                    const imgs = detail.interiorImages && detail.interiorImages.length > 0
                      ? detail.interiorImages
                      : detail.image;

                    setModalImages(imgs);
                    setModalTitle(detail.name);
                    setActiveThumb(0);
                    setShowModal(true);
                  }}
                >
                  Nội Thất
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* POPUP NỘI THẤT */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="relative bg-[#FDF6E9] rounded-3xl p-4 w-full max-w-4xl mx-2">
            {/* nút đóng */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute right-4 top-3 text-[#3E0303] text-2xl font-bold"
            >
              ×
            </button>

            <h3 className="text-center text-[#3E0303] font-bold text-[18px] md:text-[22px] mb-4 mt-2">
              {modalTitle} – Nội Thất
            </h3>

            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={10}
              slidesPerView={1}
              className="w-full"
              onSwiper={setModalSwiper} // 👉 lưu instance vào state
              onSlideChange={(swiper) => setActiveThumb(swiper.activeIndex)} // 👉 cập nhật thumbnail đang active
            >
              {modalImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="w-full aspect-[4/3]">
                    <img
                      src={img}
                      alt={`${modalTitle} - hình ${idx + 1}`}
                      className="w-full h-full object-cotain rounded-3xl"
                    />
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>

            {/* dãy thumbnail nhỏ bên dưới */}
            <div className="mt-4 flex gap-2 overflow-x-auto">
              {modalImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveThumb(idx);
                    if (modalSwiper) {
                      modalSwiper.slideTo(idx);  // 👉 cho Swiper nhảy tới slide tương ứng
                    }
                  }}
                  className={
                    "min-w-[80px] h-[70px] rounded-2xl overflow-hidden cursor-pointer border " +
                    (activeThumb === idx ? "border-[#3E0303]" : "border-[#3E0303]/30")
                  }
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BoSuuTap;
