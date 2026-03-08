"use client";
import React, { useState } from "react";
import bg from "../../assets/lahome/bglh.png";
import Image from "next/image";

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
    <div className="pt-10">
      <div className="relative">
        <Image
          src={bg}
          alt="Background Liên Hệ LaHome - NewLink Investment"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 h-full bg-black/30 z-30"></div>
        <div className="absolute inset-0 h-full flex justify-center items-center z-40">
          <div className="bg-[#05A89D] w-full py-4 max-w-[400px] text-center rounded-xl space-y-3">
            <div className="font-bold text-[20px]">Liên Hệ Tư Vấn</div>
            <p className="text-[12px] px-10">
              Để biết thêm thông tin về dự án, vui lòng để lại thông tin như bên
              dưới để chúng tôi có thể hỗ trợ tốt hơn
            </p>

            <form onSubmit={handleSubmit} className="px-6 pt-4 space-y-3">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Họ Và Tên"
                className="p-3 bg-white text-black placeholder:text-gray-400 w-full rounded-xl"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Số Điện Thoại"
                className="p-3 bg-white text-black placeholder:text-gray-400 w-full rounded-xl"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="p-3 bg-white text-black placeholder:text-gray-400 w-full rounded-xl"
                required
              />
              <button
                type="submit"
                className="bg-[#004849] px-6 py-2 mt-6 rounded-xl"
                disabled={isLoading}
              >
                {isLoading ? "Đang Gửi..." : "Gửi"}
              </button>
            </form>
            {isSuccess && (
              <p className="text-white text-[12px] mt-2">
                Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LienHe;
