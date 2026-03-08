import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";

const StaffInfoUI = () => {
  const { register, control } = useFormContext();
  const currentImage = useWatch({ control, name: "image" });

  return (
    <div className="space-y-2">
      <div className="border w-full rounded-2xl p-6 space-y-6 shadow-md bg-white dark:bg-gray-900">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Họ và Tên
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
            Email
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
            Số Điện Thoại
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
            Role
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
            Bio
          </Label>
          <Input
            type="text"
            placeholder="Tên Chủ Đề Phải từ 40 đến 60 ký tự để tối ưu"
            {...register("title", { required: true })}
            list="suggestions"
          />
        </div>
      </div>
    </div>
  );
};

export default StaffInfoUI;
