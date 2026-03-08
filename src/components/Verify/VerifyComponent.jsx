"use client";
import { useSendVerifyMutation } from "@/redux/api/authSlice";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AcceptVerify from "./AcceptVerify";
import { useSession, signOut } from "next-auth/react";

const VerifyComponent = ({ session }) => {
  const { update, status } = useSession();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [send, { isLoading }] = useSendVerifyMutation();
  const [emailSent, setEmailSent] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const router = useRouter();

  // Countdown khi gửi lại email
  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 5000); // mỗi 1 giây
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  // Tự động kiểm tra xác minh
  useEffect(() => {
    const interval = setInterval(async () => {
      const updatedSession = await update();
      if (updatedSession?.user?.verify) {
        router.push("/dashboard");
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [update, router]);

  // Gửi email xác minh
  const handleSendVerification = async () => {
    try {
      const res = await send({ email: session.user.email }).unwrap();
      setEmailSent(true);
      setCooldown(60);
    } catch (err) {
      console.error("Lỗi gửi email:", err.data?.message || err.message);
    }
  };

  const handleLogout = async () => {
    router.push("/");
    await signOut({ redirect: false });
  };

  if (token) {
    return <AcceptVerify token={token} />;
  }

  if (!session && status === "loading") {
    return (
      <div className="text-red-500 bg-white h-screen w-full">
        Đang tải thông tin người dùng...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="text-red-500 bg-white h-screen w-full">
        Bạn cần đăng nhập để xác minh email.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Xác minh Email
        </h1>
        <p className="text-gray-600 mb-6">
          Vui lòng nhấn nút bên dưới để gửi email xác minh. Kiểm tra hộp thư của
          bạn để hoàn tất quá trình.
        </p>

        <div className={`${!cooldown ? "space-x-5" : ""}`}>
          <button
            onClick={handleSendVerification}
            disabled={cooldown > 0}
            className={`${
              cooldown > 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white font-medium py-2 px-6 rounded-xl transition duration-200`}
          >
            {cooldown > 0
              ? `Gửi lại sau ${cooldown}s`
              : isLoading
                ? "Đang gửi..."
                : "Gửi Xác Minh"}
          </button>

          {emailSent && (
            <p className="text-green-600 mt-4">Email xác minh đã được gửi!</p>
          )}

          {/* Nút Logout */}
          <button
            onClick={handleLogout}
            className="mt-6 text-sm text-red-600 hover:underline"
          >
            Đăng xuất tài khoản
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyComponent;
