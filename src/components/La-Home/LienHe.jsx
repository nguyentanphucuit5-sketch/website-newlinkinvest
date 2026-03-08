"use client";
import React, { useState } from "react";
import bg from "../../assets/lahome/bglh.png";
import lahome8 from "../../assets/lahome/lahome-8.jpg";
import lahome9 from "../../assets/lahome/lahome-9.jpg";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LienHe = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    products: [],
    budget: "<3 tỷ",
    wantLoan: "Mong muốn vay",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductToggle = (product) => {
    setFormData((prev) => ({
      ...prev,
      products: prev.products.includes(product)
        ? prev.products.filter((p) => p !== product)
        : [...prev.products, product],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, project: "La Home" }),
      });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        products: [],
        budget: "<3 tỷ",
        wantLoan: "Mong muốn vay",
      });
      toast.success("Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm.");
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Gửi thông tin thất bại. Vui lòng thử lại.");
    } finally {
      setIsLoading(false);
    }
  };

  const budgetOptions = ["<3 tỷ", "3-5 tỷ", "5-7 tỷ", ">7tỷ"];
  const productOptions = ["Biệt thự", "Shophouse", "Nhà phố"];
  const loanOptions = ["Mong muốn vay", "Không vay"];
  console.log(formData);
  return (
    <div className="pt-10">
      {/* Images above contact form */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "40px 20px" }}>
        <Image
          src={lahome8}
          alt="La Home 8 - NewLink Investment"
          style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }}
        />
        <Image
          src={lahome9}
          alt="La Home 9 - NewLink Investment"
          style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: "cover" }}
        />
      </div>
      <div className="relative">
        <Image
          src={bg}
          alt="Background Liên Hệ LaHome - NewLink Investment"
          className="w-full h-[700px] object-cover"
        />
        <div className="absolute inset-0 h-full bg-black/30 z-30"></div>
        <div className="absolute inset-0 h-full flex justify-center items-center z-40">
          <div
            className="text-white text-center"
            style={{
              background: "#004849",
              borderRadius: "20px",
              width: "600px",
              maxWidth: "calc(100% - 40px)",
              padding: "38.464px 40px",
              boxSizing: "border-box",
              fontFamily: "'UTM Avo', sans-serif",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Header */}
            <div
              style={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "140%",
                fontFamily: "'UTM Avo', sans-serif",
                marginBottom: "4px",
              }}
            >
              Liên Hệ Tư Vấn
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "140%",
                fontFamily: "'UTM Avo', sans-serif",
                maxWidth: "403px",
                margin: "0 auto 24px",
                color: "#fff",
              }}
            >
              Để biết thêm thông tin về dự án, vui lòng để lại thông tin
              <br />
              như bên dưới để chúng tôi có thể hỗ trợ tốt hơn
            </p>

            <form onSubmit={handleSubmit}>
              {/* Input Fields */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px", maxWidth: "520px", margin: "0 auto 20px", width: "100%" }}>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Họ tên"
                  required
                  style={{
                    width: "100%",
                    padding: "5px 23px",
                    borderRadius: "5px",
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    fontFamily: "'UTM Avo', sans-serif",
                    color: "#333",
                    background: "#fff",
                    boxSizing: "border-box",
                    height: "30px",
                  }}
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="SĐT"
                  required
                  style={{
                    width: "100%",
                    padding: "5px 23px",
                    borderRadius: "5px",
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    fontFamily: "'UTM Avo', sans-serif",
                    color: "#333",
                    background: "#fff",
                    boxSizing: "border-box",
                    height: "30px",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Emai"
                  required
                  style={{
                    width: "100%",
                    padding: "5px 23px",
                    borderRadius: "5px",
                    border: "none",
                    outline: "none",
                    fontSize: "14px",
                    fontFamily: "'UTM Avo', sans-serif",
                    color: "#333",
                    background: "#fff",
                    boxSizing: "border-box",
                    height: "30px",
                  }}
                />
              </div>

              {/* Product Selection */}
              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "14px", fontWeight: 700, marginBottom: "10px", fontFamily: "'UTM Avo', sans-serif", lineHeight: "140%" }}>
                  Anh chị quan tâm đến sản phẩm nào của La Home (*):
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "24px",
                  }}
                >
                  {productOptions.map((product) => (
                    <label
                      key={product}
                      onClick={() => handleProductToggle(product)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontFamily: "'UTM Avo', sans-serif",
                      }}
                    >
                      <span>{product}</span>
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "5px",
                          border: "none",
                          background: "#fff",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          flexShrink: 0,
                        }}
                      >
                        {formData.products.includes(product) && (
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path
                              d="M2 6L5 9L10 3"
                              stroke="#004849"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Selection */}
              <div style={{ marginBottom: "16px" }}>
                <p style={{ fontSize: "14px", fontWeight: 700, marginBottom: "10px", fontFamily: "'UTM Avo', sans-serif", lineHeight: "140%" }}>
                  Khả năng tài chính của anh chị (*):
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: "57px",
                    background: "#fff",
                    padding: "3px",
                  }}
                >
                  {budgetOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, budget: option }))
                      }
                      style={{
                        padding: "0 14px",
                        fontSize: "14px",
                        fontFamily: "'UTM Avo', sans-serif",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        borderRadius: "57px",
                        background:
                          formData.budget === option
                            ? "#004849"
                            : "transparent",
                        color:
                          formData.budget === option
                            ? "#fff"
                            : "#004849",
                        fontWeight:
                          formData.budget === option ? 700 : 400,
                        whiteSpace: "nowrap",
                        height: "23px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Selection */}
              <div style={{ marginBottom: "26px" }}>
                <p style={{ fontSize: "14px", fontWeight: 700, marginBottom: "10px", fontFamily: "'UTM Avo', sans-serif", lineHeight: "140%" }}>
                  Anh chị có mong muốn vay không (*):
                </p>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    borderRadius: "57px",
                    background: "#fff",
                    padding: "3px",
                  }}
                >
                  {loanOptions.map((option) => (
                    <button
                      type="button"
                      key={option}
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, wantLoan: option }))
                      }
                      style={{
                        padding: "0 18px",
                        fontSize: "14px",
                        fontFamily: "'UTM Avo', sans-serif",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        borderRadius: "57px",
                        background:
                          formData.wantLoan === option
                            ? "#004849"
                            : "transparent",
                        color:
                          formData.wantLoan === option
                            ? "#fff"
                            : "#004849",
                        fontWeight:
                          formData.wantLoan === option ? 700 : 400,
                        whiteSpace: "nowrap",
                        height: "23px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                style={{
                  background: "#4AC1BA",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  padding: "7px 24px",
                  fontSize: "16px",
                  fontFamily: "'UTM Avo', sans-serif",
                  fontWeight: 700,
                  lineHeight: "140%",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  letterSpacing: "2px",
                  transition: "opacity 0.2s",
                  opacity: isLoading ? 0.7 : 1,
                  minWidth: "78px",
                  height: "42px",
                  display: "inline-flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {isLoading ? "..." : "GỬI"}
              </button>
            </form>

            <ToastContainer position="top-right" autoClose={4000} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LienHe;


