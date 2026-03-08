"use client";
import { useParams } from "next/navigation";
import React from "react";
import useBlogId from "@/hooks/Dashboard/Blog/useBlogId";
import { Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";
import styles from "@/app/tin-tuc/blog.module.css"; // Assuming you have some styles defined in this file

const BlogDetail = () => {
  const { id } = useParams();
  const { dataBlogIdLoading } = useBlogId(id);

  const blog = useSelector((state) => state.blog.blogId);

  let tagsArray = [];

  if (Array.isArray(blog.tags)) {
    tagsArray = blog.tags;
  } else if (typeof blog.tags === "string") {
    tagsArray = blog.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }

  if (!blog && dataBlogIdLoading) {
    return (
      <div className="flex items-center justify-center h-[50vh] text-xl text-red-500">
        Đang tải bài viết...
      </div>
    );
  } else {
    <div>Không tìm thấy bài viết</div>;
  }

  const transformSpaces = (html) =>
    html?.replace(/(<p>) {1,}/g, (match) => {
      const spaces = match.match(/ +/)?.[0].length || 1;
      return `<p>${"&nbsp;".repeat(spaces)}`;
    });

  const transformHeadings = (html) =>
    html
      ?.replace(/<h2>/g, '<h2 class="!text-[16px] md:!text-[24px] my-2">')
      .replace(/<p>/g, '<p class="text-[14px] md:text-[16px]  ">')
      .replace(
        /<li([^>]*)>/g,
        '<li$1 class="text-[13px] md:text-[16px] my-1 md:my-2 leading-relaxed">'
      );

  const transformedContent = transformHeadings(transformSpaces(blog.content));

  return (
    <div className="pt-24 max-w-[1100px] mx-auto relative z-10">
      <div
        className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden z-10"
        style={{
          backgroundImage: `url(${blog.image?.url})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <h1 className="text-2xl md:text-4xl font-bold max-w-[800px] mx-auto">
              {blog?.title || "Tiêu đề bài viết"}
            </h1>
            {blog?.metaDescription && (
              <p className="mt-2 text-[12px] md:text-base max-w-[800px] mx-auto opacity-90 ">
                {blog.metaDescription}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumbs và thông tin bài viết */}
      <div className="px-2 md:px-6 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="text-blue-500 font-medium hover:cursor-pointer text-[12px] md:text-[16px]">
              Blog
            </span>{" "}
            &gt;
            <span className="hover:text-blue-500 hover:cursor-pointer text-[12px] md:text-[16px]">
              {blog?.title}
            </span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {blog.cateBlog && (
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {blog.cateBlog.label}
              </Badge>
            )}
            {/* Sử lý tag bằng cách tách các dấu phẩy */}
            {tagsArray?.map((t, idx) => (
              <Badge
                key={idx}
                className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Thông tin tác giả và ngày */}
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{blog?.author || "Ẩn danh"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(), "dd/MM/yyyy")}</span>
          </div>
        </div>
      </div>

      {/* Nội dung bài viết */}
      <div
        className={`mt-8 px-2 md:px-6 pb-6 max-w-[1000px] mx-auto  ${styles.listContainer}`}
      >
        <div
          className="ql-editor blog-content prose dark:prose-invert max-w-none custom-line-height"
          dangerouslySetInnerHTML={{ __html: transformedContent }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
