"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LaHomeTI } from "@/utils/lahome";
import Image from "next/image";

// Đăng ký ScrollTrigger với GSAP
gsap.registerPlugin(ScrollTrigger);

const TienIch = () => {
  const Card = ({ title, imageUrl, description }) => {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const descRef = useRef(null);

    useEffect(() => {
      const card = cardRef.current;
      const image = imageRef.current;
      const desc = descRef.current;

      if (window.innerWidth <= 768) {
        // Chỉ kích hoạt trên thiết bị di động
        gsap.to(card, {
          width: 400,
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            end: "top 5%",
            toggleActions: "play reverse play reverse",
          },
        });
        gsap.to(desc, {
          opacity: 1,
          height: "auto",
          duration: 0.3,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          scrollTrigger: {
            trigger: card,
            start: "top 60%",
            end: "top 5%",
            toggleActions: "play reverse play reverse",
          },
        });
      } else {
        // Giữ hiệu ứng hover cho thiết bị lớn
        const handleMouseEnter = () => {
          gsap.to(card, { width: 400, duration: 0.3, ease: "power2.out" });
          gsap.to(image, { height: "100%", duration: 0.3, ease: "power2.out" });
          gsap.to(desc, {
            opacity: 1,
            height: "auto",
            duration: 0.3,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, { width: 256, duration: 0.3, ease: "power2.out" });
          gsap.to(desc, {
            opacity: 0,
            height: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, []);

    return (
      <div
        ref={cardRef}
        className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer flex flex-col"
        style={{ width: 256 }}
      >
        <Image
          ref={imageRef}
          src={imageUrl}
          alt={title}
          width={2000}
          height={2000}
          className="w-full h-full object-cover transition-all duration-300"
        />
        <div className="absolute inset-0 flex flex-col justify-end">
          <h3 className="text-center py-2 font-bold text-lg bg-black/50">
            {title}
          </h3>
          <p
            ref={descRef}
            className="w-full bg-black/50 text-white p-2 opacity-0 transition-opacity duration-300 overflow-hidden text-sm hover:bg-black/30"
            style={{ height: 0 }}
          >
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h2 className="relative font-bold text-[32px] text-black pb-10 text-center -mt-6 z-40">
        Tiện Tích Liền Kề
      </h2>
      <div
        className="flex flex-wrap gap-4 p-4 justify-center"
        style={{ maxWidth: "1300px", margin: "0 auto" }}
      >
        {LaHomeTI.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TienIch;
