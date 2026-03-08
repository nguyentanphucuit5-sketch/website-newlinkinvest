import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clippath from "../../assets/images/clippath.png";
import bangten from "../../assets/images/bangten.png";
import Image from "next/image";
import { Directors } from "@/utils/data";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ItemDirectors = () => {
  useEffect(() => {
    gsap.from(".director-item", {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".director-item", // Kích hoạt khi phần tử này xuất hiện
        start: "top 80%", // Bắt đầu animation khi phần tử này cách 80% từ trên xuống
        end: "top 30%",
      },
    });
  }, []);

  return (
    <div className="max-w-[200px] mx-auto md:max-w-full grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-10">
      {Directors.map((director) => (
        <div key={director.id} className="director-item flex justify-center">
          <div className="relative w-[300px] ">
            <div className="absolute inset-0 -z-30">
              <div className="flex items-end pb-10 h-full scale-125">
                <Image src={clippath} alt="New Link Investment" />
              </div>
            </div>

            <div className=" w-full  flex justify-center">
              <Image src={director.image} alt={director.alt} />
            </div>

            <div className="absolute text-[32px] md:text-[44px] font-utm-avo-bold top-[60px] md:top-[74px] left-0 bg-clip-text text-transparent bg-gradient-to-b from-[#ffffffde] to-[#09303D]">
              +{director.year}
            </div>
            <div className="absolute text-[12px] md:text-[16px] font-utm-avo-bold top-[68px] md:top-[84px] -right-4 bg-clip-text text-transparent bg-gradient-to-b from-[#ffffffde] to-[#09303D]">
              năm <br /> kinh nghiệm
            </div>
            <div className="">
              <div className="flex items-end justify-center -mb-2 md:-mb-4 h-full">
                <Link
                  href={`/ban-lanh-dao?name=${director.link}`}
                  className="bg-gradient-to-r from-[#0C6985] to-[#09303D] hover:text-black cursor-pointer hover:from-[#f8e2b7ad] hover:to-[#D9B770]  px-8 md:px-12 py-2 rounded-2xl  flex flex-col items-center justify-center border border-[#E7CE8D]"
                >
                  <p className="text-[14px] md:text-[20px] font-utm-avo-bold">
                    {director.name}
                  </p>
                  <p className="text-[12px] md:text-[16px] font-utm-avo">
                    {director.role}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemDirectors;
