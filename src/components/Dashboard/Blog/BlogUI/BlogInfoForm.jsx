import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const BlogInfoForm = () => {
  const { register, control } = useFormContext();
  const currentImage = useWatch({ control, name: "image" });
  const imageTitle =
    typeof currentImage === "object" && currentImage?.title
      ? currentImage.title
      : null;


  return (
    <div className="space-y-2">
      <div className="border w-full rounded-2xl p-6 space-y-6 shadow-md bg-white dark:bg-gray-900">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tên Chủ Đề
          </Label>
          <Input
            type="text"
            placeholder="Tên Chủ Đề Phải từ 40 đến 60 ký tự để tối ưu"
            {...register("title", { required: true })}
            list="suggestions"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Tổng Quan Nội Dung
          </Label>
          <Textarea
            placeholder="Nội Dung Phải từ 120 đến 160 ký tự để tối ưu"
            {...register("description", { required: true })}
            list="suggestions"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Ảnh Chủ Đề
          </Label>
          <Input type="file" {...register("image")} />
          {imageTitle && (
            <div className="flex space-x-4">
              <div>Ảnh Hiện Tại: </div>{" "}
              <Image
                src={currentImage.url || ""}
                alt="Ảnh"
                width={0}
                height={0}
                sizes="100vw"
                className="h-40 w-auto object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogInfoForm;
