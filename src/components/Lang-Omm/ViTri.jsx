"use client";
import Image from "next/image";
import React, { useRef } from "react";
import map from "@/assets/langomm/map.png";
import dongho from "@/assets/langomm/dongho.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // ⬅️ Đừng quên import!

gsap.registerPlugin(ScrollTrigger);

const ViTri = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const mapRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Tiêu đề
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });

      // Mô tả
      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 85%",
        },
      });

      // Map
      gsap.from(mapRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 85%",
        },
      });

      // Các item bên phải
      itemsRef.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const data = [
    { title: "Đồi chè Tâm Châu Hồ đồi chè Tâm Châu", time: 1 },
    { title: "Chùa Di Đà", time: 3 },
    { title: "Ngã 5 Damb’ri", time: 5 },
    { title: "Nút giao cao tốc Dầu Giây - Liên Khương", time: 10 },
    { title: "Khu du lịch Thác Damb’ri", time: 12 },
    { title: "Trung tâm TP. Bảo Lộc Vincom Bảo Lộc", time: 20 },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full p-2 md:px-10 text-white">
        <div className="w-full h-full max-w-[1440px] mx-auto backdrop-blur-md bg-white/10 rounded-[30px] p-4 md:p-10">
          <h2
            ref={titleRef}
            className="text-[24px] md:text-[48px] font-ftv-blushing-rose text-center"
          >
            VỊ TRÍ ĐẮC ĐỊA
          </h2>
          <p
            ref={descRef}
            className="text-[12px] md:text-[18px] w-full max-w-[900px] mx-auto text-center"
          >
            Làng Omm cách cao tốc Dầu Giây - Bảo Lộc - Liên Khương chỉ 10 phút
            đi xe, nên khi tuyến cao tốc đi vào hoạt động sẽ kéo gần khoảng cách
            từ TP.HCM đến với Bảo Lộc chỉ còn từ 2 giờ lái xe, biến nơi đây
            thành điểm du lịch nghỉ dưỡng, "cửa ngõ" giao thông – giao thương
            của vùng cao nguyên trù phú với thủ phủ phía Nam
          </p>
        </div>
      </div>

      <div className="md:py-4"></div>

      <div className="w-full h-full px-2 md:px-10 text-white">
        <div className="w-full h-full max-w-[1440px] mx-auto rounded-[30px] flex flex-col md:flex-row md:space-x-5 items-stretch space-y-4 md:space-y-0">
          {/* Cột trái (map) */}
          <div
            ref={mapRef}
            className="w-full md:w-4/6 border-8 border-[#3C6B33] bg-white rounded-[30px] overflow-hidden"
          >
            <Image
              src={map}
              alt="Map Lang OMM - NewLink Investment"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cột phải */}
          <div className="w-full md:w-2/6 rounded-[30px] backdrop-blur-md bg-white/10 ">
            <div className="flex items-center justify-center h-full">
              <div className="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-6 p-4">
                {data.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (itemsRef.current[index] = el)}
                    className="transition-all duration-300 p-2 rounded-md"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Image
                        src={dongho}
                        alt="dong ho"
                        className="w-[30px] md:w-[50px] transition-transform duration-300"
                      />
                      <p className="text-[14px] md:text-[24px] font-bold">
                        {item.time} Phút
                      </p>
                    </div>
                    <div className="text-[10px] md:text-[16px]">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViTri;
