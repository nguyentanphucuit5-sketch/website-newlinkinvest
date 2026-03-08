"use client";
import { setBlogId } from "@/redux/feature/blogSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NewsList = () => {
  const [blog, setBlog] = useState([]);

  const dataBlog = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  console.log(blog);

  useEffect(() => {
    if (dataBlog?.blog) {
      const sorted = [...dataBlog.blog].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setBlog(sorted);
    }
  }, [dataBlog]);

  const handleOnChange = async (item) => {
    await dispatch(setBlogId(item));
  };

  return (
    <div className="relative z-50 py-8 md:py-12 px-4 mt-20 lg:px-8">
      <div className="space-y-6 max-w-5xl mx-auto">
        {blog.map((item) => {
          const formattedDate = new Date(item.createdAt).toLocaleDateString(
            "vi-VN"
          );

          return (
            <div
              key={item._id}
              className="flex flex-col md:flex-row overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white relative"
              onMouseEnter={() => handleOnChange(item)}
            >
              {/* Ảnh */}
              <div className="relative w-full md:w-1/3 h-[200px] md:h-[180px]">
                <Image
                  src={item.image.url}
                  alt={item.imageAlt || item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Nội dung */}
              <div className="p-5 w-full md:w-2/3 text-black font-utm-avo">
                <h2 className="text-lg font-utm-avo-bold line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.metaDescription}
                </p>
                <span className=" text-xs text-gray-500">
                  Ngày đăng: {formattedDate}
                </span>
              </div>

              {/* Ngày ở góc trái dưới */}

              {/* Đọc thêm ở góc phải dưới */}
              <Link
                href={`/tin-tuc/${item.slug}`}
                className="absolute bottom-3 right-5 text-xs text-blue-500 font-medium hover:underline"
              >
                Đọc thêm
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
