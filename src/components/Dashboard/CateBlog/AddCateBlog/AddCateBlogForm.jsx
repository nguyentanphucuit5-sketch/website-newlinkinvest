"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import slugify from "slugify";
import { toast } from "react-toastify";
import { useCreateCateBlogMutation } from "@/redux/api/cateBlogSlice";
import { removeVietnameseTones } from "@/lib/Func/FuncHelp";
import CateBlogFormUI from "../CateBlogUI/CateBlogFormUI";
import useCateBlogList from "@/hooks/Dashboard/CateBlog/useCateBlogList";

const AddCateBlogForm = () => {
  // Form
  const methods = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  // Redux
  const [create] = useCreateCateBlogMutation();
  const { dataCateBlogRefetch } = useCateBlogList();

  //Action
  //  Thêm mới thể loại blog
  const onSubmit = async (data, e) => {
    e.preventDefault();

    try {
      const nameWithoutTones = removeVietnameseTones(data.name);
      const slug = slugify(nameWithoutTones, { lower: true, strict: true });

      const cateBlogData = {
        ...data,
        slug: slug,
      };

      const res = await create(cateBlogData).unwrap();
      if (res) {
        toast.success("Thêm thành công!");
        dataCateBlogRefetch();
        methods.reset();
      }
    } catch (error) {
      if (error.status === 409) {
        toast.error("Tên người dùng đã tồn tại!");
      } else {
        toast.error("Đã có lỗi xảy ra!");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full flex justify-between"
      >
        <div className="w-[48%] space-y-6">
          <CateBlogFormUI />
          <div className="w-full flex justify-end">
            <Button type="submit" className="mt-4 px-10">
              Thêm Loại Bài Viết
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddCateBlogForm;
