import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useFormContext } from "react-hook-form";
import { Badge } from "@/components/ui/badge"; // Giả định có component Badge từ UI library
import { Calendar, User } from "lucide-react"; // Icon từ lucide-react
import { format } from "date-fns";
import { useEffect, useState } from "react";

const BlogPopupBlog = () => {
  const { watch } = useFormContext();
  const { title, description, image, content, cateBlog, tag, author } = watch();

  const [imageUrl, setImageUrl] = useState(""); // State để lưu URL tạm thời

  // Tạo URL tạm thời cho hình ảnh nếu image là File
  useEffect(() => {
    if (image instanceof FileList && image.length > 0) {
      // Lấy tệp đầu tiên từ FileList
      const file = image[0];
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      // Dọn dẹp URL khi component unmount hoặc image thay đổi
      return () => URL.revokeObjectURL(url);
    } else if (image instanceof File) {
      // Trường hợp image là File trực tiếp
      const url = URL.createObjectURL(image);
      setImageUrl(url);
      return () => URL.revokeObjectURL(url);
    } else if (typeof image === "string" && image) {
      // Trường hợp image là URL chuỗi (từ server)
      setImageUrl(image);
    } else {
      // Fallback nếu không có hình ảnh
      setImageUrl(image.image);
    }
  }, [image]);

  let tagsArray = [];

  if (Array.isArray(tag)) {
    tagsArray = tag;
  } else if (typeof tag === "string") {
    tagsArray = tag
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }

  const transformSpaces = (html) =>
    html.replace(/(<p>) {1,}/g, (match) => {
      const spaces = match.match(/ +/)?.[0].length || 1;
      return `<p>${"&nbsp;".repeat(spaces)}`;
    });

  const transformHeadings = (html) =>
    html
      ?.replace(
        /<h2>/g,
        '<h2 class="text-[18px] md:text-xl font-bold mt-4 mb-2">'
      )
      .replace(/<p>/g, '<p class="text-[14px] md:text-[16px]  mt-4 mb-2">')
      .replace(
        /<li([^>]*)>/g,
        '<li$1 class="text-[14px] md:text-[16px] mt-2 leading-relaxed">'
      );

  const transformedContent = transformHeadings(transformSpaces(content));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button">Xem Trước</Button>
      </DialogTrigger>
      <DialogContent
        style={{
          width: "100%",
          maxWidth: "1100px",
          maxHeight: "90vh", // giới hạn chiều cao
          overflowY: "auto", // bật cuộn dọc
        }}
      >
        <DialogHeader className="relative">
          <DialogTitle className="hidden">Tiêu đề blog</DialogTitle>

          {/* Header với hình ảnh bìa */}
          <div
            className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${imageUrl ? imageUrl : image.url})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-3xl md:text-4xl font-bold max-w-[800px] mx-auto">
                  {title || "Tiêu đề bài viết"}
                </h1>
                {description && (
                  <p className="mt-2 text-sm md:text-base max-w-[600px] mx-auto opacity-90">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Breadcrumbs và thông tin bài viết */}
          <div className="px-6 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="text-blue-500 font-medium hover:cursor-pointer">
                  Blog
                </span>{" "}
                &gt;
                <span className="hover:text-blue-500 hover:cursor-pointer">
                  {title || "Bài viết"}
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {cateBlog && (
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {cateBlog.label}
                  </Badge>
                )}
                {/* Sử lý tag bằng cách tách các dấu phẩy */}
                {tagsArray.map((t, idx) => (
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
                <span>{author || "Ẩn danh"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(), "dd/MM/yyyy")}</span>
              </div>
            </div>
          </div>

          {/* Nội dung bài viết */}
          <div className="mt-8 px-6 pb-6 w-[800px] max-w-[800px] mx-auto ">
            <div
              className="ql-editor blog-content prose dark:prose-invert max-w-none custom-line-height"
              dangerouslySetInnerHTML={{ __html: transformedContent }}
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlogPopupBlog;
