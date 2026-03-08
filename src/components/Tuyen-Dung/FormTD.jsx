import React, { useState } from "react";
import Swal from "sweetalert2";

const FormTD = ({ closeModal, selectedJob }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    confirmEmail: "",
    birthYear: "",
    desc: "",
    cvFile: null,
  });

  const [errorEmail, setErrorEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? (files?.[0] || null) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorEmail(false);

    if (formData.email !== formData.confirmEmail) {
      setErrorEmail(true);
      return;
    }

    const file = formData.cvFile;

    if (!file) {
      Swal.fire("Lỗi", "Vui lòng chọn file CV (PDF)", "error");
      return;
    }

    const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
    if (!isPdf) {
      Swal.fire("Lỗi", "Vui lòng chọn đúng file PDF", "error");
      return;
    }

    const MAX = 2 * 1024 * 1024; // 2MB
    if (file.size > MAX) {
      Swal.fire("Lỗi", "File lớn hơn 2MB", "error");
      return;
    }

    try {
      setIsLoading(true);

      const fd = new FormData();
      fd.append("fullName", formData.fullName);
      fd.append("gender", formData.gender);
      fd.append("email", formData.email);
      fd.append("birthYear", formData.birthYear);
      fd.append("desc", formData.desc);
      fd.append("role", selectedJob?.role || "");
      fd.append("pdfs", file); // key backend đang nhận là "pdfs"

      const res = await fetch("/api/send-recruitment", {
        method: "POST",
        body: fd,
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      if (!res.ok || !data?.ok) {
        const msg = data?.error || `Server lỗi (${res.status})`;
        throw new Error(msg);
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Đơn tuyển dụng đã được gửi",
        showConfirmButton: false,
        timer: 1500,
      });

      closeModal();
    } catch (err) {
      Swal.fire("Lỗi", err?.message || "Không thể gửi email", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70">
      {/* backdrop blur (không chặn thao tác) */}
      <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none" />

      {/* scroll container toàn màn */}
      <div className="relative w-full h-[100dvh] overflow-y-auto overscroll-contain touch-pan-y px-4 py-6 md:py-10">
        {/* card */}
        <div
          className="
            relative mx-auto w-full max-w-[560px]
            rounded-2xl overflow-hidden
            border border-[#D4C081]/60
            shadow-[0_20px_80px_rgba(0,0,0,0.55)]
            max-h-[calc(100dvh-48px)] md:max-h-[calc(100dvh-80px)]
            flex flex-col
          "
        >
          <div className="bg-[#063543] flex flex-col min-h-0">
            {/* header (không scroll) */}
            <div className="relative px-5 md:px-7 pt-6 pb-4 border-b border-white/10 shrink-0">
              <button
                className="
                  absolute top-4 right-4
                  w-10 h-10 rounded-full
                  border border-[#D4C081]/60
                  text-[#D4C081]
                  hover:bg-white/5
                  transition
                "
                onClick={closeModal}
                aria-label="Đóng"
                type="button"
              >
                ×
              </button>

              <h2 className="text-center font-utm-avo-bold text-[18px] md:text-[22px]">
                <span className="bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent">
                  Ứng tuyển vị trí
                </span>
              </h2>

              <div className="text-center mt-1 text-white/90 text-[12px] md:text-[13px]">
                {selectedJob?.role}
              </div>
            </div>

            {/* body scroll */}
            <div
              className="
                min-h-0 overflow-y-auto px-5 md:px-7 py-5 md:py-6 text-white
                [-webkit-overflow-scrolling:touch]

                [scrollbar-width:thin]
                [scrollbar-color:#D4C081_#063543]

                [&::-webkit-scrollbar]:w-[10px]
                [&::-webkit-scrollbar-track]:bg-[#063543]
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-[#D4C081]
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:border-[2px]
                [&::-webkit-scrollbar-thumb]:border-[#063543]
                hover:[&::-webkit-scrollbar-thumb]:bg-[#E6D59A]
              "
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-utm-avo-bold text-[13px] md:text-[14px] text-white/95">
                    Họ và tên <span className="text-red-400">*</span>
                  </label>
                  <input
                    value={formData.fullName}
                    name="fullName"
                    onChange={handleChange}
                    type="text"
                    className="
                      mt-2 w-full px-4 py-2.5 rounded-xl
                      bg-white/5 text-white
                      border border-[#D4C081]/35
                      placeholder:text-white/40
                      outline-none
                      focus:border-[#D4C081]/70 focus:ring-2 focus:ring-[#D4C081]/20
                      transition
                    "
                    required
                  />
                </div>

                <div>
                  <label className="font-utm-avo-bold text-[13px] md:text-[14px] text-white/95">
                    Giới tính <span className="text-red-400">*</span>
                  </label>

                  <div className="mt-2 flex flex-wrap gap-3">
                    {["Nam", "Nữ"].map((gender) => {
                      const val = gender.toLowerCase();
                      const checked = formData.gender === val;
                      return (
                        <label
                          key={gender}
                          className={`
                            flex items-center gap-2 cursor-pointer
                            px-4 py-2 rounded-xl
                            border transition
                            ${
                              checked
                                ? "border-[#D4C081]/70 bg-white/5"
                                : "border-white/10 bg-transparent hover:bg-white/5"
                            }
                          `}
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={val}
                            checked={checked}
                            onChange={handleChange}
                            className="accent-[#D4C081] w-4 h-4"
                            required
                          />
                          <span className="text-[14px] text-white/90">
                            {gender}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="font-utm-avo-bold text-[13px] md:text-[14px] text-white/95">
                    Email <span className="text-red-400">*</span>
                  </label>

                  {errorEmail && (
                    <div className="mt-1 text-[12px] text-red-300">
                      Email không trùng khớp - Vui lòng nhập lại!!!
                    </div>
                  )}

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                      mt-2 w-full px-4 py-2.5 rounded-xl
                      bg-white/5 text-white
                      border border-[#D4C081]/35
                      placeholder:text-white/40
                      outline-none
                      focus:border-[#D4C081]/70 focus:ring-2 focus:ring-[#D4C081]/20
                      transition
                    "
                    required
                  />
                </div>

                <div>
                  <label className="font-utm-avo-bold text-[13px] md:text-[14px] text-white/95">
                    Nhập lại Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                    className="
                      mt-2 w-full px-4 py-2.5 rounded-xl
                      bg-white/5 text-white
                      border border-[#D4C081]/35
                      placeholder:text-white/40
                      outline-none
                      focus:border-[#D4C081]/70 focus:ring-2 focus:ring-[#D4C081]/20
                      transition
                    "
                    required
                  />
                </div>

                <div>
                  <label className="font-utm-avo-bold text-[13px] md:text-[14px] text-white/95">
                    Năm sinh <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="number"
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleChange}
                    className="
                      mt-2 w-full px-4 py-2.5 rounded-xl
                      bg-white/5 text-white
                      border border-[#D4C081]/35
                      placeholder:text-white/40
                      outline-none
                      focus:border-[#D4C081]/70 focus:ring-2 focus:ring-[#D4C081]/20
                      transition
                    "
                    required
                  />
                </div>

                <div>
                  <label className="font-utm-avo-bold text-[13px] md:text-[14px] text-white/95">
                    Thư ứng tuyển <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    className="
                      mt-2 w-full min-h-[110px] px-4 py-2.5 rounded-xl
                      bg-white/5 text-white
                      border border-[#D4C081]/35
                      placeholder:text-white/40
                      outline-none resize-none
                      focus:border-[#D4C081]/70 focus:ring-2 focus:ring-[#D4C081]/20
                      transition
                    "
                    required
                  />
                </div>

                <div>
                  <label className="font-utm-avo-bold text-[13px] md:text-[14px] text-white/95">
                    Tải CV <span className="text-red-400">*</span>
                  </label>

                  <div className="mt-1 text-[12px] text-white/60">
                    Vui lòng tải lên CV định dạng (.PDF){" "}
                    <span className="text-white/90 font-utm-avo-bold">
                      dưới 2MB
                    </span>
                  </div>

                  <label
                    className="
                      mt-3 flex items-center justify-between gap-3
                      border border-dashed border-[#D4C081]/45
                      rounded-2xl px-4 py-3 cursor-pointer
                      hover:bg-white/5 transition
                    "
                  >
                    <span className="text-white/85 text-[13px] md:text-[14px] truncate">
                      {formData.cvFile ? formData.cvFile.name : "Chọn file CV (.PDF)"}
                    </span>

                    <span
                      className="
                        shrink-0 px-4 py-2 rounded-xl text-[12px] md:text-[13px]
                        font-utm-avo-bold
                        bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770]
                        text-[#063543]
                      "
                    >
                      Tải CV
                    </span>

                    <input
                      type="file"
                      name="cvFile"
                      accept=".pdf"
                      onChange={handleChange}
                      className="hidden"
                      required={!formData.cvFile}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`
                    w-full mt-2 px-6 py-3 rounded-2xl
                    font-utm-avo-bold
                    bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770]
                    text-[#063543]
                    hover:brightness-105 active:scale-[0.99]
                    transition
                    ${isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
                  `}
                >
                  {isLoading ? "Đang gửi..." : "Gửi"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTD;
