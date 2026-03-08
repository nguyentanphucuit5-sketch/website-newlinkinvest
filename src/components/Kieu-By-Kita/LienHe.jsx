"use client";
import React, { useState } from "react";
import Image from "next/image";
import bothlogo from "../../assets/kieubykita/bothlogo.png";
import bg2 from "../../assets/kieubykita/bg2.png";

const LienHe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, project: "Kiều By Kita" }),
      });

      setFormData({ fullName: "", phone: "", email: "" });
      setIsSuccess(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        background: "radial-gradient(circle, #821212 0%, #3D0303 100%)",
      }}
      className="p-2 py-20 md:py-20 w-full h-full flex flex-col items-center text-black relative"
    >
      <div className="flex flex-col md:flex-row justify-between space-y-5 w-[350px] md:w-[1000px] z-20">
        <div className="flex justify-center items-center">
          <Image
            src={bothlogo}
            alt="Logo Kieu By Kita - NewLink Investment"
            className="w-[300px] md:w-[600px] hidden md:block"
          />
        </div>
        <div className="bg-[#EFEFEF] py-10 rounded-2xl px-10">
          <h2 className="text-center font-bold text-[20px] md:text-[24px] text-[#6A0B0B]">
            Đăng Ký Tham Quan Dự Án
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-[300px] mx-auto space-y-8 mt-5"
          >
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Họ và Tên"
              className="w-full h-10 border rounded-lg p-2"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Số Điện Thoại"
              className="w-full h-10 border rounded-lg p-2"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full h-10 border rounded-lg p-2"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#6A0B0B] text-white py-2 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Đang Gửi..." : "Đăng Ký Ngay"}
            </button>
          </form>
          {isSuccess && (
            <p className="text-green-600 text-center mt-4">
              Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.
            </p>
          )}
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bg2}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D0202] to-transparent"></div>
      </div>
    </div>
  );
};

export default LienHe;
