import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useFormContext } from "react-hook-form";

const CateBlogFormUI = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-2">
      <div className="border w-full rounded-2xl p-6 space-y-6 shadow-sm bg-white dark:bg-gray-900">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Loại bài viết
          </Label>
          <Input
            type="text"
            placeholder="Tên Loại Bài Viết"
            {...register("name")}
            required
            list="suggestions"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Chi Tiết
          </Label>
          <Textarea
            placeholder="Chi tiết Loại Bài Viết"
            className="h-[120px] "
            {...register("description")}
          />
        </div>
      </div>
    </div>
  );
};

export default CateBlogFormUI;
