import React, { useState } from "react";
import FT from "../../assets/langomm/Footer.png";
import Image from "next/image";
import Thank from "../../assets/langomm/Thank.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    desc: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showThankImage, setShowThankImage] = useState(false);

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
    const project = `Làng Omm - ${formData.desc}`;

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
        desc: "",
      });
      setIsSuccess(true);
      setShowThankImage(true);
    } catch (err) {
      console.error("Error submitting form:", err);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full relative z-10 text-white">
      {/* Hình nền */}
      <div className="absolute bottom-0 z-0">
        <Image
          src={FT}
          alt="footer"
          width={1111}
          height={1111}
          className="w-screen"
        />
      </div>

      {/* Nội dung form */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto p-10">
        <h2 className="text-[32px] md:text-[40px] text-center font-ftv-blushing-rose text-[#3C6B33]">
          Đăng kí tư vấn và trải nghiệm LÀNG OMM
        </h2>
        <p className="w-full max-w-[800px] mx-auto text-center text-[#3C6B33] text-[14px] md:text-[18px]">
          Nếu quý khách quan tâm hay cần tư vấn thông tin liên quan, quý khách
          vui lòng điền thông tin theo form bên dưới, chúng tôi sẽ trả lời trong
          thời gian sớm nhất
        </p>
        <h3 className="text-center text-[22px] md:text-[24px] text-[#3C6B33] pt-2 md:pt-5">
          Hoặc holine: 0909999619
        </h3>
      </div>
      {showThankImage && (
        <div className="w-full max-w-[600px] mx-auto px-2 pb-10">
          <div className="relative z-40  p-4 bg-[#88888833] rounded-4xl pb-8">
            <div className="flex justify-center pt-6 animate-fade-in">
              <Image
                src={Thank}
                alt="Thank you"
                width={400}
                height={200}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {!showThankImage && (
        <div className="relative z-10 w-full max-w-[1440px] mx-auto p-2 md:p-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Nhóm input */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="fullName"
                placeholder="Họ và tên:"
                value={formData.fullName}
                onChange={handleChange}
                className="flex-1 p-3  border-gray-300 rounded-xl backdrop-blur-2xl shadow-2xl placeholder:text-white placeholder:font-bold bg-[#3C6B33]/30 md:bg-white/10 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email:"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 p-3  border-gray-300 rounded-xl backdrop-blur-2xl shadow-2xl placeholder:text-white placeholder:font-bold bg-[#3C6B33]/30 md:bg-white/10 focus:outline-none"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Sđt:"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 p-3  border-gray-300 rounded-xl backdrop-blur-2xl shadow-2xl placeholder:text-white placeholder:font-bold bg-[#3C6B33]/30 md:bg-white/10 focus:outline-none"
                required
              />
            </div>

            {/* Textarea */}
            <div>
              <textarea
                name="desc"
                placeholder="Nội dung:"
                value={formData.desc}
                onChange={handleChange}
                className="w-full p-3 border-gray-300 rounded-xl backdrop-blur-2xl shadow-2xl placeholder:text-white placeholder:font-bold bg-[#3C6B33]/30 md:bg-white/10 focus:outline-none"
                rows={4}
                required
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 text-white font-bold bg-[#3C6B33] hover:bg-[#2e5126] rounded-xl transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Đang gửi..." : "Đăng kí"}
              </button>
            </div>

            {/* Thông báo */}
            {isSuccess && (
              <p className="text-center text-green-400 font-bold pt-4">
                ✅ Gửi thành công! Chúng tôi sẽ liên hệ sớm nhất.
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Footer;
