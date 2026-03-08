"use client";
import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center space-x-1">
      <p>Trang này đang được phát triển hãy quay lại </p>{" "}
      <Link href={"/"} className="text-[20px] font-bold text-red-600">
        Về trang chủ - Bấm Vào Đây
      </Link>
    </div>
  );
};

export default ErrorPage;
