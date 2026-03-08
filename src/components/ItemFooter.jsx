import React from "react";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";

const ItemFooter = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-2">
        <FiPhone size={16} />
        <a
          href="tel:0909999619"
          className="text-[10px] md:text-[14px] font-utm-avo  hover:underline"
        >
          090.9999.619
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <CiMail size={16} />
        <a
          href="mailto:contact@newlinkinvest.com"
          className="text-[10px] md:text-[14px] font-utm-avo  hover:underline"
        >
          contact@newlinkinvest.com
        </a>
      </div>
      <div className="flex items-center space-x-2">
        <HiOutlineDocumentText size={16} />
        <p className="text-[10px] md:text-[14px] w-[220px] md:w-full font-utm-avo  hover:underline">
          Mã số thuế: 0318857621
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <CiLocationOn size={16} />
        <a
          href="https://www.google.com/maps?q=277 Trương Văn Bang, P. Thạnh Mỹ Lợi, Thành phố Thủ Đức"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] md:text-[14px] w-[200px] md:w-[600px] font-utm-avo  hover:underline"
        >
          Văn Phòng NewLink : 277 Trương Văn Bang, Khu Phố 4, P. Cát Lái, <br /> Thành
          Phố Hồ Chí Minh , Việt Nam
        </a>
      </div>
      <p className="text-[10px] md:text-[14px] font-utm-avo text-white">
        © 2025 NewLink Investment - NƠI KẾT NỐI NHỮNG ƯỚC MƠ
      </p>
    </div>
  );
};

export default ItemFooter;
