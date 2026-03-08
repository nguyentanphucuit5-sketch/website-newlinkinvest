"use client";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { useSelector } from "react-redux";
import BlogInfoForm from "../BlogUI/BlogInfoForm";
import BlogContentForm from "../BlogUI/BlogContentForm";
import BlogTagForm from "../BlogUI/BlogTagForm";
import BlogViewForm from "../BlogUI/BlogViewForm";
import { useAddBlogMutation } from "@/redux/api/blogSlice";
import useImageUploading from "@/hooks/Image/useImageUploading";
import { toast } from "react-toastify";
import useImageDelete from "@/hooks/Image/useImageDelete";

const AddBlogForm = () => {
  // redux
  const { fullName } = useSelector((state) => state.auth.profile);
  const [addBlog, { isLoading }] = useAddBlogMutation();
  const { uploadImages, isUploading } = useImageUploading();
  const { deleteImages, isDelete } = useImageDelete();

  const methods = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      slug: "",
      content: "",
      cateBlog: {
        value: "",
        label: "",
      },
      tag: "",
      author: fullName,
    },
  });

  useEffect(() => {
    if (fullName) {
      methods.reset({
        ...methods.getValues(),
        author: fullName,
      });
    }
  }, [fullName]);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    let imageUrls = [];

    try {
      // Upload ảnh
      if (data.image && data.image.length > 0) {
        imageUrls = await uploadImages(data.image); // Trả về array URL hoặc object chứa ID
      }

      // Tạo blog
      const res = await addBlog({
        title: data.title,
        slug: data.slug,
        metaDescription: data.description,
        content: data.content,
        image: imageUrls[0], // Giả sử chỉ chọn ảnh đầu
        category: data.cateBlog,
        tags: data.tag,
        author: data.author,
        canonicalUrl: `/tin-tuc/${data.slug}`,
      }).unwrap();

      if (res) {
        toast.success(` ${res.message} `);
        methods.reset();
        e.target.reset();
      }
    } catch (error) {
      toast.error(` ${error.data?.message || "Đã xảy ra lỗi"} `);

      // Nếu có ảnh đã upload, thực hiện xóa
      if (imageUrls.length > 0) {
        try {
          await deleteImages(imageUrls[0]); // Tùy vào cách bạn xóa: truyền URL hay ID
          console.log("Ảnh đã được xóa do lỗi khi tạo blog.");
        } catch (deleteErr) {
          console.error("Lỗi khi xóa ảnh:", deleteErr);
        }
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-full flex justify-between"
      >
        <div className="w-[70%] space-y-6">
          <BlogInfoForm />
          <BlogContentForm />
        </div>
        <div className="w-[28%] space-y-6">
          <BlogTagForm />
          <BlogViewForm />
          <div className="w-full flex justify-center">
            <Button type="submit" className="mt-4 px-10">
              {isLoading || isUploading ? "Đang đăng bài..." : "Đăng Bài"}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddBlogForm;
