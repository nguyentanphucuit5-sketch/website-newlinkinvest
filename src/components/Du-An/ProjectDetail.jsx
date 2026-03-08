"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { DuAnDetail } from "@/utils/project";
import { TbXboxX } from "react-icons/tb";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = DuAnDetail.find((item) => item.id === id);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to open modal with selected image
  const openModal = (image) => {
    setSelectedImage(typeof image === "string" ? image.trimEnd() : image);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  if (!project) {
    return (
      <div className="text-white text-center mt-20">Dự án không tồn tại</div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Gửi request đến server của bạn
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, project: project.name }),
      });

      setFormData({ fullName: "", phone: "", email: "" });
      setIsLoading(false);
      setType(true);
    } catch (err) {
      console.log(err);
    }

    // Reset form
  };

  return (
    <div
      className="relative z-30 py-5 md:py-10 px-2 mt-12 md:mt-20 lg:px-0"
      style={{ backgroundColor: "#09303D" }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[80vh] w-full overflow-hidden"
      >
        <Image
          src={project.images[0]}
          alt={`${project.name} Hero`}
          layout="fill"
          objectFit="cover"
          className="brightness-75 rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center rounded-3xl">
          <div className="text-center px-4">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-10 font-extrabold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent tracking-tight"
            >
              {project.name}
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
        <div className="absolute top-0 right-0 rounded-bl-2xl rounded-tr-3xl p-4 border-l shadow-2xl backdrop-blur-xl">
          <Image
            src={project.logo}
            alt="logo"
            width={1000}
            height={1000}
            className="w-[100px] md:w-[140px]"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent text-center mb-12"
          >
            Thông Tin Dự Án
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Vị Trí", value: project.location },
              { label: "Chủ Đầu Tư", value: project.developer },
              { label: "Loại Hình", value: project.project_type },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-teal-900 bg-opacity-80 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-semibold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent">
                  {item.label}
                </h3>
                <p className="text-gray-300 mt-2">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Utilities Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent text-center mb-12"
          >
            Tiện Ích Đẳng Cấp
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.utilities.map((utility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-700 p-6 rounded-xl shadow-md hover:bg-gray-600 transition-colors"
              >
                <p className="text-gray-200 font-medium text-center">
                  {utility}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Story Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent text-center mb-12"
          >
            Câu Chuyện {project.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 max-w-4xl mx-auto text-center leading-relaxed"
          >
            {project.story}
          </motion.p>
        </section>
        {/* Map Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#bd8919] bg-clip-text text-transparent text-center mb-12"
          >
            Vị Trí Đắc Địa
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full rounded-xl flex justify-center cursor-pointer"
            onClick={() => openModal(project.map_embed_url)}
          >
            <Image
              src={project.map_embed_url}
              alt="map"
              width={1000}
              height={1000}
              className="rounded-xl bg-[#082c38]"
            />
          </motion.div>
        </section>
        {/* Floor Plans Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent text-center mb-12"
          >
            Sơ Đồ Mặt Bằng
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project?.floorPlans.map((floorPlan, index) => (
              <motion.div
                key={floorPlan.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openModal(floorPlan.image)}
              >
                <Image
                  src={
                    typeof floorPlan.image === "string"
                      ? floorPlan.image.trimEnd()
                      : floorPlan.image
                  }
                  alt={`${project.name} Floor Plan - ${floorPlan.name}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A] to-transparent p-4">
                  <p className="text-white font-semibold text-center drop-shadow-md">
                    {floorPlan.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Image Gallery */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent text-center mb-12"
          >
            Thư Viện Hình Ảnh
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative h-60 md:h-80 rounded-xl overflow-hidden cursor-pointer"
                onClick={() => openModal(image)}
              >
                <Image
                  src={typeof image === "string" ? image.trimEnd() : image}
                  alt={`${project.name} Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </section>
        {/* Learn More Form Section */}

        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-t from-[#FAD48A] via-[#FFF5BE] to-[#D9B770] bg-clip-text text-transparent text-center mb-12"
          >
            Tìm Hiểu Thêm Về Dự Án
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-xl shadow-xl border border-gray-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {["fullName", "phone", "email"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-black">
                    {field === "fullName"
                      ? "Họ và Tên"
                      : field === "phone"
                      ? "Số Điện Thoại"
                      : "Email"}
                  </label>
                  <input
                    type={
                      field === "email"
                        ? "email"
                        : field === "phone"
                        ? "tel"
                        : "text"
                    }
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full p-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                    placeholder={`Nhập ${
                      field === "fullName"
                        ? "họ và tên"
                        : field === "phone"
                        ? "số điện thoại"
                        : "email"
                    }`}
                  />
                </div>
              ))}

              <div className="text-center">
                {!type ? (
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
                  >
                    {!isLoading ? "Gửi Thông Tin" : "Đang gửi..."}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={true}
                    className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Đã Gửi
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </section>
      </div>

      {/* Modal for Full-Screen Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl font-bold"
            >
              <TbXboxX color="#D9B770" />
            </button>
            <Image
              src={selectedImage}
              alt="Full-size image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", maxHeight: "80vh" }}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
