import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ItemDirectors from "./ItemDirectors";

gsap.registerPlugin(ScrollTrigger);

const Directors = () => {
  useEffect(() => {
    gsap.from(".director-title", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".director-title", // Kích hoạt khi phần tử này xuất hiện
        start: "top 80%", // Bắt đầu animation khi phần tử này cách 80% từ trên xuống
        end: "top 30%", // Kết thúc khi phần tử này ở vị trí 30%
      },
    });

    gsap.from(".director-description", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".director-description", // Kích hoạt khi phần tử này xuất hiện
        start: "top 80%", // Bắt đầu animation khi phần tử này cách 80% từ trên xuống
        end: "top 30%",
  
      },
    });
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto py-5 mt-8 md:mt-20 pb-20">
      <h2 className="director-title text-center text-[24px] md:text-[40px] font-utm-avo  bg-gradient-to-t from-[#FAD48A] from-[0%] via-[#FFF5BE] via-[50%] to-[#D9B770] to-[100%] bg-clip-text text-transparent">
        BAN LÃNH ĐẠO
      </h2>
      <div className="director-description mt-2 w-[350px] md:w-[600px] mx-auto">
        <h3 className="text-center text-[12px] md:text-[14px]">
          Với đội ngũ lãnh đạo giàu kinh nghiệm, <span className="font-utm-avo-bold">NEWLINK</span> luôn nỗ lực không ngừng để
          mang lại những giá trị bền vững cho các nhà đầu tư, khách hàng và cộng
          đồng.
        </h3>
      </div>

      <ItemDirectors />
    </div>
  );
};

export default Directors;
