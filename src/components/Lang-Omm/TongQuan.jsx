"use client";
import React, { useRef } from "react";
import icon1 from "@/assets/langomm/icon1.png";
import icon2 from "@/assets/langomm/icon2.png";
import icon3 from "@/assets/langomm/icon3.png";
import icon4 from "@/assets/langomm/icon4.png";
import icon5 from "@/assets/langomm/icon5.png";
import icon6 from "@/assets/langomm/icon6.png";
import icon7 from "@/assets/langomm/icon7.png";
import icon8 from "@/assets/langomm/icon8.png";
import met from "@/assets/langomm/met.png";
import TQ from "../../assets/langomm/TQ.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TongQuan = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Tiêu đề và mô tả
      gsap.from(".tq-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".tq-title",
          start: "top 80%",
        },
      });

      gsap.from(".tq-desc", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".tq-desc",
          start: "top 80%",
        },
      });

      // Danh sách item
      itemsRef.current.forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          x: -50,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

      // Hình ảnh và giá tiền
      gsap.from(".tq-image", {
        opacity: 0,
        scale: 0.95,
        duration: 3,
        scrollTrigger: {
          trigger: ".tq-image",
          start: "top 80%",
        },
      });

      gsap.from(".tq-price", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: ".tq-price",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const data = [
    {
      title:
        "Hạ tầng: Đường nội khu 6–8m, điện nước đầy đủ, cổng vào riêng biệt",
      icon: icon1,
    },
    {
      title: "Tiến độ thanh toán: Linh hoạt, chia làm 3–4 đợt",
      icon: icon2,
    },
    {
      title: "Pháp lý: Sổ hồng riêng từng nền (đất ở nông thôn – ONT)",
      icon: icon3,
    },
    {
      title: "Diện tích nền: từ 200m² – 500m² (đa dạng lựa chọn)",
      icon: icon4,
    },
    {
      title: "Vị trí: Xã Lộc Tân, huyện Bảo Lâm, TP. Bảo Lộc, tỉnh Lâm Đồng",
      icon: icon5,
    },
    {
      title: "Loại hình: Đất nền nghỉ dưỡng – villa second home",
      icon: icon6,
    },
    {
      title: "Tổng quy mô: 2,2 ha",
      icon: icon7,
    },
    {
      title: "Số lượng sản phẩm: ~35 nền",
      icon: icon8,
    },
  ];

  return (
    <div ref={sectionRef} className="w-full p-2 md:p-10 text-white">
      <div className="w-full h-full max-w-[1440px] mx-auto backdrop-blur-md bg-white/10 rounded-[30px] p-4 md:p-10">
        <h2 className="text-[24px] md:text-[48px] font-ftv-blushing-rose text-center tq-title">
          TỔNG QUAN VỀ LÀNG OMM
        </h2>
        <p className="text-[12px] md:text-[18px] w-full max-w-[800px] mx-auto text-center tq-desc">
          Giữa nhịp sống bộn bề, Làng Omm hiện lên như một chốn dừng chân lý
          tưởng – nơi bạn có thể thả lỏng cơ thể và để tâm trí được chữa lành
          trong không gian xanh mát của thiên nhiên nguyên sơ.
        </p>
        <div className="w-full flex flex-col md:flex-row pt-6 md:pt-10">
          <div className="w-full md:w-1/2">
            <div className="space-y-3">
              {data.map((item, i) => {
                const [beforeColon, afterColon] = item.title.split(":");
                return (
                  <div
                    key={i}
                    ref={(el) => (itemsRef.current[i] = el)}
                    className="flex items-center gap-4"
                  >
                    <div className="relative flex-shrink-0 w-[35px] h-[35px]  md:w-[50px] md:h-[50px] bg-[#FFFFFF40] rounded-full overflow-hidden">
                      <Image
                        src={item.icon}
                        alt=""
                        fill
                        className="object-cover p-1 md:p-2"
                      />
                    </div>
                    <p className="text-[14px] md:text-[18px] leading-snug break-words">
                      <strong className="font-bold">{beforeColon}:</strong>{" "}
                      {afterColon}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <div className="tq-image">
              <Image
                src={TQ}
                alt="Tổng Quan - NewLink Investment"
                width={10000}
                height={10000}
                className="w-full"
              />
            </div>
            <div className="tq-price">
              <p className="text-[14px] md:text-[18px]">
                Tổng giá trị nền từ{" "}
                <span className="font-bold">1,6 - 3,8 tỷ đồng/nền</span> tùy
                diện tích
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TongQuan;
