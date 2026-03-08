"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TuVan = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    budget: "",
    product: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatCurrency = (value) => {
    // Loại bỏ ký tự không phải số
    const numericValue = value.replace(/[^\d]/g, "");
    if (!numericValue) return "";
    // Định dạng theo kiểu tiền Việt
    return new Intl.NumberFormat("vi-VN").format(numericValue);
  };

  const handleBudgetChange = (e) => {
    const rawValue = e.target.value;
    const formatted = formatCurrency(rawValue);
    setFormData((prev) => ({
      ...prev,
      budget: formatted,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const project = `River Park - ${formData.product} - Ngân Sách ${formData.budget} VNĐ`;

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, project }),
      });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        budget: "",
        product: "",
      });
      setIsSuccess(true);
      router.push("/river-park/thank-you");
    } catch (err) {
      console.error("Error submitting form:", err);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-10 p-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] h-full py-14 md:py-7 px-2 mx-auto bg-[#54D9DF] rounded-tl-[140px] rounded-br-[140px]"
      >
        <h2 className="font-bold text-white text-center text-[28px]">
          ĐĂNG KÍ NHẬN TƯ VẤN
        </h2>

        {/* Sản phẩm */}
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          className="w-full border-b-2 pt-5 text-white bg-transparent text-[18px]"
        >
          <option value="" className="text-black" disabled>
            Anh/ chị quan tâm đến sản phẩm nào của La Home (*)
          </option>
          <option value="Nhà phố" className="text-black">
            Nhà phố
          </option>
          <option value="Shophouse" className="text-black">
            Shophouse
          </option>
          <option value="Biệt thự" className="text-black">
            Biệt thự
          </option>
        </select>

        {/* Ngân sách */}
        <div className="mt-4">
          <input
            value={formData.budget}
            onChange={handleBudgetChange}
            className="w-full border-b-2 pt-3 text-white bg-transparent text-[18px]"
            type="text"
            placeholder="Ngân sách mà anh chị muốn sở hữu sản phẩm tại LA Home là bao nhiêu"
            required
          />
        </div>

        {/* Họ và tên */}
        <div className="mt-4">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border-b-2 pt-3 text-white bg-transparent text-[18px]"
            type="text"
            placeholder="Họ và tên (*)"
            required
          />
        </div>

        {/* Số điện thoại */}
        <div className="mt-4">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b-2 pt-3 text-white bg-transparent text-[18px]"
            type="text"
            placeholder="Số điện thoại (*)"
            required
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b-2 pt-3 text-white bg-transparent text-[18px]"
            type="email"
            placeholder="Email"
          />
        </div>

        {/* Nút submit */}
        <div className="flex justify-center w-full pt-5">
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-white px-4 py-2 rounded-xl font-bold text-[#54D9DF] text-[18px] transition-colors duration-300 cursor-pointer ${
              isLoading
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-[#C6F5F7] hover:text-[#2BA7AC]"
            }`}
          >
            {isLoading ? "Đang gửi..." : "Đăng Ký"}
          </button>
        </div>

        {isSuccess && (
          <p className="text-center text-white mt-4">Gửi thành công!</p>
        )}
      </form>
    </div>
  );
};

export default TuVan;
