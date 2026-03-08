import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import slugify from "slugify";
import BlogPopupBlog from "./BlogPopupBlog";
import { removeVietnameseTones } from "@/lib/Func/FuncHelp";

const BlogViewForm = () => {
  const { watch, setValue, register } = useFormContext();
  const title = watch("title");

  useEffect(() => {
    if (title) {
      const nameWithoutTones = removeVietnameseTones(title);
      const slug = slugify(nameWithoutTones, { lower: true, strict: true });
      setValue("slug", slug);
    }
  }, [title, setValue]);

  return (
    <div className="space-y-2">
      <div className="border w-full rounded-2xl p-6 space-y-6 shadow-md bg-white dark:bg-gray-900">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Đường Dẫn Rút Gọn
          </Label>
          <Input
            type="text"
            placeholder="Tên đường dẫn"
            {...register("slug", { required: true })}
            list="suggestions"
          />
        </div>

        <div className="flex justify-end">
          {/* SEO Mẫu Popup */}
          <BlogPopupBlog />
        </div>
      </div>
    </div>
  );
};

export default BlogViewForm;
