"use client";

import React from "react";
import Menu from "@/components/Menu";
import ProjectData from "@/lib/DataUI/ProjectData";
import Image from "next/image";
import Link from "next/link";

const TTDAComponent = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-5 md:px-0">
      <Menu />

      <div className="relative z-50 py-5 md:py-10 mt-20 space-y-16 md:space-y-20">
        <div className="text-center text-[24px] font-bold">
          CỔNG THÔNG TIN DỰ ÁN NEW LINK ĐANG TRIỂN KHAI
        </div>

        <div className="flex items-center justify-center p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
            {ProjectData.map((p, i) => (
              <Link
                href={`/thong-tin-du-an/${p.link}`}
                key={i}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                {/* Ảnh dự án */}
                <Image
                  src={p.banner}
                  alt={p.name}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-700 group-hover:from-black/80"></div>

                {/* Tên dự án */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center">
                  <span
                    className="text-white text-lg font-semibold text-center px-3 drop-shadow-md 
                    opacity-90 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    {p.name}
                  </span>
                </div>

                {/* Hiệu ứng viền sáng khi hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/40 rounded-xl transition-all duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TTDAComponent;
