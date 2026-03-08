"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useVerifyEmailMutation } from "@/redux/api/authSlice";

const AcceptVerify = ({ token }) => {
  const [acceptVerify] = useVerifyEmailMutation();

  useEffect(() => {
    if (token) {
      const verifyToken = async () => {
        try {
          const res = await acceptVerify({ token }).unwrap();
          console.log("Xác thực thành công:", res);
        } catch (err) {
          console.error("Lỗi khi xác thực token:", err);
        }
      };

      verifyToken();
    }
  }, [token, acceptVerify]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="bg-card text-card-foreground p-8 rounded-lg shadow-md text-center max-w-md">
        <div className="text-green-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-2">
          Xác thực email thành công!
        </h2>
        <p className="mb-2">
          Cảm ơn bạn đã xác minh email. Bạn có thể tiếp tục sử dụng ứng dụng.
        </p>

        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-200">
          Vui Lòng Đóng Trang Này
        </button>
      </div>
    </div>
  );
};

export default AcceptVerify;
