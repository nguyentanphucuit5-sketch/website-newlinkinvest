import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useFormContext } from "react-hook-form";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const QuillCustom = ({
  fieldName,
  placeholder = "Viết nội dung tại đây...",
  className = "h-full bg-white dark:bg-gray-800 dark:text-white",
}) => {
  const { register, setValue, watch } = useFormContext();
  const content = watch(fieldName);

  // Register Quill content with react-hook-form
  useEffect(() => {
    register(fieldName, { required: true });
  }, [register, fieldName]);

  const modules = {
    // 🛠 Thanh công cụ đầy đủ
    toolbar: [
      // Tiêu đề
      [{ header: [2,  false] }],

      // Định dạng văn bản
      ["bold", "italic", "underline", "strike", "blockquote", "code"],

      // Căn lề và định dạng đoạn văn
      [{ align: [] }],

      // Danh sách
      [{ list: "bullet" }, { indent: "-1" }, { indent: "+1" }],

      // Màu sắc
      [{ color: [] }, { background: [] }],

      // Liên kết và media
      ["link", "image", "video"],

      // Dọn sạch định dạng
      ["clean"],
    ],

    // 📋 Cấu hình clipboard khi dán văn bản
    clipboard: {
      matchVisual: false, // Giữ nguyên format khi dán từ ngoài vào
    },

    // 🔁 Undo / Redo
    history: {
      delay: 2000, // Thời gian delay trước khi push vào stack
      maxStack: 500, // Lưu tối đa bao nhiêu lần undo
      userOnly: true, // Chỉ undo khi thao tác từ người dùng (không phải JS)
    },

    // 🎹 Phím tắt tuỳ chỉnh
    keyboard: {
      bindings: {
        // Ví dụ custom Ctrl+B
        customBold: {
          key: "B",
          shortKey: true,
          handler(range, context) {
            console.log("Bold pressed (custom)");
          },
        },
      },
    },

    // 💻 Highlight code block (yêu cầu highlight.js)
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code",
    "list",
    "indent",
    "color",
    "background",
    "link",
    "image",
    "video",
    "align",
    "direction",
  ];

  return (
    <ReactQuill
      theme="snow"
      value={content || ""}
      onChange={(value) => setValue(fieldName, value, { shouldValidate: true })}
      modules={modules}
      formats={formats}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default QuillCustom;
