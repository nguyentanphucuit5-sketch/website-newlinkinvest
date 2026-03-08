"use client";

import React from "react";
import { useParams } from "next/navigation";
import Menu from "@/components/Menu";
import ProjectData from "@/lib/DataUI/ProjectData";
import Image from "next/image";
import Link from "next/link";

const TTDAIDComponent = () => {
  const { id } = useParams();
  const project = ProjectData.find((p) => p.link === id);

  if (!project) {
    return (
      <div className="max-w-[1240px] mx-auto py-5 px-3 md:px-0">
        <Menu />
        <div className="mt-20 text-center text-red-500">
          Không tìm thấy dự án
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] mx-auto py-5 px-3 md:px-0">
      <Menu />

      <div className="relative z-50 py-5 md:py-10 mt-20 space-y-16 md:space-y-20">
        {/* Hình tờ rơi */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {project.toroi.map((i, index) => (
            <div
              key={index}
              className="w-full sm:w-[80%] md:w-[45%] flex justify-center"
            >
              <Image
                src={i}
                alt={`Project Tờ Rơi ${index}`}
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          ))}
        </div>

        {/* Tiêu đề */}
        <div className="text-center px-2">
          <i className="text-[20px] md:text-[32px] font-bold mb-2 text-white block">
            Link thông tin dự án - {project.name}
          </i>
          <p className="text-[28px] md:text-[48px] font-bold bg-gradient-to-r from-[#C7A763] via-[#FAD48A] to-[#FFF5BE] bg-clip-text text-transparent pb-2">
            SALE MATERIALS
          </p>
        </div>

        {/* Danh sách tài liệu */}
        <div className="flex flex-wrap justify-center gap-5">
          {project.sale.map((item) => (
            <div
              key={item.number}
              className="w-[45%] sm:w-[30%] md:w-[30%] lg:w-[23%] flex flex-col items-start"
            >
              <p className="text-[28px] md:text-[48px] font-bold bg-gradient-to-r from-[#C7A763] via-[#FAD48A] to-[#FFF5BE] bg-clip-text text-transparent pb-1">
                {item.number}
              </p>
              <div className="p-[2px] md:p-[3px] w-full bg-gradient-to-r from-[#C7A763] via-[#FAD48A] to-[#C7A763] rounded-lg">
                <div className="bg-[#063543] p-3 md:p-4 text-center text-white rounded-lg">
                  <Link href={item.link}>
                    <p className="text-[14px] md:text-[20px] cursor-pointer hover:underline font-semibold">
                      {item.name}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div>
          <Image
            src={project.banner}
            alt="Background"
            className="w-full rounded-lg shadow-2xl mt-10"
          />
        </div>

        {/* Map + Thông tin */}
        <div className="relative">
          <Image
            src={project.map}
            alt="Map"
            className="w-full rounded-lg mt-10 shadow-2xl"
          />
          <div className="absolute top-2 right-2 sm:top-5 sm:right-5 max-w-[120px] sm:max-w-[250px] text-center space-y-3 sm:space-y-4">
            <div className="p-[1px] sm:p-[3px] bg-gradient-to-r from-[#C7A763] via-[#FAD48A] to-[#C7A763] rounded-lg">
              <div className="bg-[#063543] p-3 sm:p-4 rounded-lg">
                <p className="text-[10px] sm:text-[16px] font-bold bg-gradient-to-r from-[#C7A763] via-[#FAD48A] to-[#FFF5BE] bg-clip-text text-transparent pb-1">
                  {project.name}
                </p>
                <i className="text-[8px] sm:text-[12px] text-white block">
                  {project.address}
                </i>
              </div>
            </div>
            {/* <div className="p-[2px] sm:p-[3px] bg-gradient-to-r from-[#C7A763] via-[#FAD48A] to-[#C7A763] rounded-lg">
              <div className="bg-[#063543] p-3 sm:p-4 text-center text-white rounded-lg">
                <Link href={project.linkmap}>
                  <p className="cursor-pointer hover:underline font-bold text-[8px] sm:text-[14px]">
                    Xem bằng Google Maps
                  </p>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TTDAIDComponent;
