import React from "react";
import LogoNIC from "../../assets/RiverPark/LogoNIC.png";
import MST from "../../assets/RiverPark/MST.png";
import Mail from "../../assets/RiverPark/Mail.png";
import Location from "../../assets/RiverPark/Location.png";
import QR from "../../assets/RiverPark/QR_Code.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" pt-20">
      <div className="bg-[#54D9DF]">
        <div className="w-full max-w-[1440px] mx-auto p-2 py-10 md:p-10 md:py-20 flex justify-between">
          <div className="flex flex-col md:flex-row space-x-10">
            <div className="flex justify-center md:justify-start ">
              <Image
                src={LogoNIC}
                alt="Logo NIC"
                className="w-[200px] md:w-[220px]"
              />
            </div>
            <div>
              <h2 className="pb-3 font-bold text-[#00979C]">
                CÔNG TY CỔ PHẦN ĐẦU TƯ BẤT ĐỘNG SẢN NEWLINK
              </h2>
              <div className="space-y-2 text-[#00979C]">
                <div className="flex space-x-2">
                  <div className="w-[25px] h-[25px] bg-[#00979C] rounded-full flex justify-center items-center">
                    <Image src={MST} alt="MST" className="w-[10px] h-[10px]" />
                  </div>
                  <div>MST: 0318857621</div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-[25px] h-[25px] bg-[#00979C] rounded-full flex justify-center items-center">
                    <Image src={Mail} alt="MST" className="w-[10px] h-[10px]" />
                  </div>
                  <div>contact@newlinkinvest.com</div>
                </div>
                <div className="flex space-x-2">
                  <div className="w-[25px] h-[25px] bg-[#00979C] rounded-full flex justify-center items-center">
                    <Image
                      src={Location}
                      alt="MST"
                      className="w-[10px] h-[10px]"
                    />
                  </div>
                  <div>
                    277 Trương Văn Bang, phường Cát Lái, Thành Phố Hồ Chí Minh.
                  </div>
                </div>
                <div className="flex w-full flex-col justify-center items-center">
                  <a
                    href="https://newlinkinvest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00979C] flex flex-col items-center justify-center space-y-3 hover:underline"
                  >
                    <div className="md:hidden">Website : newlinkinvest.com</div>
                  </a>
                  <div className="md:hidden">
                    <Image
                      src={QR}
                      alt="QR Code"
                      className="w-[100px] h-[100px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-[#00979C] flex flex-col items-center justify-center space-y-3 ">
            <a
              href="https://newlinkinvest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00979C] flex flex-col items-center justify-center space-y-3 hover:underline"
            >
              <div className="hidden md:block">Website : newlinkinvest.com</div>
            </a>
            <div className="hidden md:block">
              <Image src={QR} alt="QR Code" className="w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
