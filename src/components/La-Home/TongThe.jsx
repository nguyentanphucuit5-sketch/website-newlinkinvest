import React from "react";
import tongthe from "../../assets/lahome/tongthe.png";
import Image from "next/image";
const TongThe = () => {
  return (
    <div className="bg-[#00494D] min-h-[50vh] flex justify-center mt-20">
      <div className="relative">
        <div className="flex items-end h-[50vh] md:h-full">
          <Image
            src={tongthe}
            alt="Tong Thể Quy Hoạch Dự Án La Home - NewLink Investment"
          />
        </div>
        <div className="absolute inset-0  max-w-[1100px] mx-auto p-6 md:py-20">
          <div className="flex flex-col md:flex-row md:justify-between ">
            <h2 className="text-[24px] md:text-[32px]">
              Tổng Thể <br /> Quy Hoạch Dự Án
            </h2>
            <div className="flex flex-col space-y-4 mt-8">
              <div className="flex items-end justify-end space-x-6 md:space-x-14">
                <p className="text-[18px] md:text-[30px] font-bold">
                  100 <span className="text-[12px] md:text-[14px]">ha</span>
                </p>
                <p className="w-[50px] md:w-[80px] text-[18px] md:text-[30px] font-bold">
                  20 <span className="text-[12px] md:text-[14px]">%</span>
                </p>
                <div className="w-[180px] md:w-[240px] text-[14px] md:text-[18px]">
                  Nhà có cảnh quan mặt nước
                </div>
              </div>
              <div className="flex items-end justify-end space-x-6 md:space-x-14">
                <div></div>
                <div className="w-[50px] md:w-[80px] text-[18px] md:text-[30px] font-bold">
                  2,3 <span className="text-[12px] md:text-[14px]">ha</span>
                </div>
                <div className="w-[180px] md:w-[240px] text-[14px] md:text-[18px]">
                  Công viên trung tâm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TongThe;
