"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const LoginVerify = ({ session }) => {
  const router = useRouter();

  useEffect(() => {
    if (
      session &&
      (session?.user.role === "admin" || session?.user.role === "manager")
    ) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    session && (
      <div className="fixed inset-0 flex justify-center items-center bg-black/50 bg-opacity-20">
        <div className="text-white text-lg opacity-70">
          Đang thu thập dữ liệu người dùng ....
        </div>
      </div>
    )
  );
};

export default LoginVerify;
