"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tab = () => {
  const data = [
    {
      title: "Điểm khác biệt",
      desc: [
        "Kiến tạo không gian “sống chậm” / giữa thiên nhiên – thư giãn, thiền định, tái tạo năng lượng",
        "Thiết kế mở, tận dụng tầm nhìn / ra đồi thông và đồi chè – mỗi lô đều có view đẹp",
        "Giữ nguyên hệ sinh thái tự nhiên, / không bê tông hóa toàn bộ như khu dân cư đô thị",
        "Kết nối với các khu du lịch nổi tiếng / như thác Dambri, hồ Tân Rai, đồi chè Tâm Châu",
      ],
    },
    {
      title: "Tiềm năng đầu tư",
      desc: [
        "Giá đất còn “mềm” / so với Đà Lạt, nhưng tiềm năng tăng giá mạnh nhờ cao tốc và quy hoạch đô thị du lịch",
        "Có thể xây dựng villa nghỉ dưỡng / để cho thuê theo mô hình Airbnb, Booking...",
        "Thanh khoản tốt nhờ / pháp lý rõ ràng, vị trí đẹp, hạ tầng hoàn thiện",
        "Khả năng sinh lời kép nhờ / tăng giá tài sản và thu nhập từ cho thuê ngắn ngày",
        "Xu hướng về cao nguyên nghỉ dưỡng / hậu Covid-19 thúc đẩy nhu cầu sở hữu second home",
      ],
    },
    {
      title: "Đối tượng phù hợp",
      desc: [
        "Nhà đầu tư / muốn sở hữu bất động sản sinh thái pháp lý rõ ràng, giá trị tăng theo thời gian",
        "Gia đình, cá nhân / cần ngôi nhà thứ hai (second home) nghỉ dưỡng cuối tuần",
        "Nhà kinh doanh / homestay, villa cho thuê tìm kiếm vị trí độc đáo, tầm nhìn đẹp",
      ],
    },
  ];

  const boxesRef = useRef([]);

  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      gsap.fromTo(
        box,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full h-full">
      <div className="w-full p-2 md:px-10 text-white">
        <div className="w-full h-full max-w-[1440px] mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
          {data.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => (boxesRef.current[idx] = el)}
              className="flex-1 backdrop-blur-md bg-white/10 rounded-[30px] py-6 px-8 opacity-0"
            >
              <h2 className="text-[24px] md:text-[28px] font-ftv-blushing-rose text-center mb-4">
                {item.title}
              </h2>
              <ul className="space-y-2 text-sm md:text-base list-disc">
                {item.desc.map((desc, i) => {
                  const [boldPart, normalPart] = desc.split(" / ");
                  return (
                    <li key={i}>
                      <strong>{boldPart}</strong>
                      {normalPart ? ` ${normalPart}` : ""}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
