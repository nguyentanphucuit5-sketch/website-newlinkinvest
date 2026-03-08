"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LienHe = () => {
  useEffect(() => {
    // Select all section divs
    const sections = gsap.utils.toArray(".section");

    // Animate each section
    sections.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Start animation when section is 80% from top of viewport
          },
          delay: index * 0.2, // Stagger animations
        }
      );
    });

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full h-full pt-10 pb-20">
      <div className="max-w-[1440px] mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 items-stretch">
        <div className="section bg-[#3C6B33] rounded-[16px] p-4 text-white md:px-8 h-full">
          <h2 className="text-center mb-4 font-ftv-blushing-rose text-[22px] md:text-[40px]">
            Điểm khác biệt của Làng Omm
          </h2>
          <ul className="list-disc pl-5 text-left text-[14px] md:text-[16px] space-y-2">
            <li>
              <span className="font-bold">Kiến tạo không gian “sống chậm”</span>{" "}
              giữa thiên nhiên – thư giãn, thiền định, tái tạo năng lượng
            </li>
            <li>
              <span className="font-bold">Thiết kế mở, tận dụng tầm nhìn</span>{" "}
              ra đồi thông và đồi chè – mỗi lô đều có view đẹp
            </li>
            <li>
              <span className="font-bold">
                Giữ nguyên hệ sinh thái tự nhiên,
              </span>{" "}
              không bê tông hóa toàn bộ như khu dân cư đô thị
            </li>
            <li>
              <span className="font-bold">
                Kết nối với các khu du lịch nổi tiếng
              </span>{" "}
              như thác Dambri, hồ Tân Rai, đồi chè Tâm Châu
            </li>
          </ul>
        </div>
        <div className="section bg-[#3C6B33] rounded-[16px] p-4 text-white md:px-8 h-full">
          <h2 className="text-center mb-4 font-ftv-blushing-rose text-[22px] md:text-[40px]">
            Tiềm năng đầu tư
          </h2>
          <ul className="list-disc pl-5 text-left text-[14px] md:text-[16px] space-y-2">
            <li>
              <span className="font-bold">Giá đất còn “mềm”</span> so với Đà
              Lạt, nhưng tiềm năng tăng giá mạnh nhờ cao tốc và quy hoạch đô thị
              du lịch
            </li>
            <li>
              <span className="font-bold">
                Có thể xây dựng villa nghỉ dưỡng
              </span>{" "}
              để cho thuê theo mô hình Airbnb, Booking...
            </li>
            <li>
              <span className="font-bold">Thanh khoản tốt nhờ</span> pháp lý rõ
              ràng, vị trí đẹp, hạ tầng hoàn thiện
            </li>
            <li>
              Khả năng sinh lời kép nhờ{" "}
              <span className="font-bold">
                tăng giá tài sản và thu nhập từ cho thuê ngắn ngày
              </span>
            </li>
            <li>
              <span className="font-bold">
                Xu hướng về vùng cao nguyên nghỉ dưỡng
              </span>{" "}
              hậu Covid-19 thúc đẩy nhu cầu sở hữu second home
            </li>
          </ul>
        </div>
        <div className="section bg-[#3C6B33] rounded-[16px] p-4 text-white md:px-8 h-full">
          <h2 className="text-center mb-4 font-ftv-blushing-rose text-[22px] md:text-[40px]">
            Đối tượng phù hợp
          </h2>
          <ul className="list-disc pl-5 text-left text-[14px] md:text-[16px] space-y-2">
            <li>
              <span className="font-bold">Nhà đầu tư</span> muốn sở hữu bất động
              sản sinh thái pháp lý rõ ràng, giá trị tăng theo thời gian
            </li>
            <li>
              <span className="font-bold">Gia đình, cá nhân</span> cần ngôi nhà
              thứ hai (second home) nghỉ dưỡng cuối tuần
            </li>
            <li>
              <span className="font-bold">Nhà kinh doanh</span> homestay, villa
              cho thuê tìm kiếm vị trí độc đáo, tầm nhìn đẹp
            </li>
          </ul>
        </div>
        <div className="section bg-[#3C6B33] rounded-[16px] p-4 text-white md:px-8 h-full">
          <h2 className="text-center mb-4 font-ftv-blushing-rose text-[22px] md:text-[40px]">
            Liên hệ đặt lịch tham quan
          </h2>
          <ul className="list-disc pl-5 text-left text-[14px] md:text-[16px] space-y-2">
            <li>
              <span className="font-bold">Hotline/Zalo:</span> 090.9999.619
            </li>
            <li>
              <span className="font-bold">Lịch tham quan:</span> Thứ 7 – Chủ
              nhật (có xe đưa đón từ TP.HCM)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
