"use client"; // Cần có nếu bạn dùng trong app router của Next.js 13+

import React from "react";
import { useRouter } from "next/navigation"; // Nếu bạn dùng App Router
import { FaLongArrowAltLeft } from "react-icons/fa";

const ToolExit = ({ text }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex space-x-3">
      <button
        onClick={handleBack}
        className="h-10 w-10 border flex justify-center items-center rounded-lg bg-gray-100 hover:bg-gray-200 hover:cursor-pointer dark:hover:bg-gray-300"
      >
        <FaLongArrowAltLeft color={"gray"} size={24} />
      </button>
      <div className="text-gray-500 dark:text-gray-300">
        Quay trở lại {text}
      </div>
    </div>
  );
};

export default ToolExit;
