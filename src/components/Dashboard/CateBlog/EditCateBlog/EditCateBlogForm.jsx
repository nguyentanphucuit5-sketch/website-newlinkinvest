"use client";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import slugify from "slugify";
import { useSelector } from "react-redux";
import CateBlogFormUI from "../CateBlogUI/CateBlogFormUI";
import useCateBlogId from "@/hooks/Dashboard/CateBlog/useCateBlogId";
import { useUpdateCateBlogMutation } from "@/redux/api/cateBlogSlice";
import useCateBlogList from "@/hooks/Dashboard/CateBlog/useCateBlogList";

const EditCateBlogForm = () => {
  //Router
  const params = useParams();
  const productId = params.id;

  // Hook
  useCateBlogId(productId);
  const { dataCateBlogRefetch } = useCateBlogList();

  //Redux
  const [update] = useUpdateCateBlogMutation();
  const { cateBlogId } = useSelector((state) => state.cateBlog);

  // Form
  const methods = useForm({
    defaultValues: {
      name: "",
      description: "",
      slug: "",
    },
  });
  const { reset } = methods;

  //Lấy dữ liệu từ serser truyền vào form
  useEffect(() => {
    if (cateBlogId) {
      reset({
        name: cateBlogId.name,
        description: cateBlogId.description,
      });
    }
  }, [cateBlogId, reset]);

  // Submit update
  const onSubmit = async (data, e) => {
    e.preventDefault();
    const slug = slugify(data.name);

    const productData = {
      ...data,
      slug: slug,
    };
    const res = await update({ id: productId, data: productData }).unwrap();

    if (res) {
      toast.success("Cập nhật thành công!");
      dataCateBlogRefetch();
    }

    try {
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="pt-5 w-full flex justify-between"
      >
        <div className="w-[48%] space-y-6">
          <CateBlogFormUI />
          <div className="flex justify-end">
            <Button type="submit" className="mt-4 px-10">
              Thêm Sản Phẩm
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditCateBlogForm;
