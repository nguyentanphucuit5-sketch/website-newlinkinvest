"use client";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

import { toast } from "react-toastify";
import useBlogList from "@/hooks/Dashboard/Blog/useBlogList";
import useImageUploading from "@/hooks/Image/useImageUploading";
import BlogInfoForm from "../BlogUI/BlogInfoForm";
import BlogContentForm from "../BlogUI/BlogContentForm";
import BlogTagForm from "../BlogUI/BlogTagForm";
import BlogViewForm from "../BlogUI/BlogViewForm";
import { useEditBlogMutation } from "@/redux/api/blogSlice";
import useBlogId from "@/hooks/Dashboard/Blog/useBlogId";

const EditBlogForm = () => {
  // redux
  const { user } = useSelector((state) => state.auth);
  const { blogId } = useSelector((state) => state.blog);
  const [updateBlog] = useEditBlogMutation();

  //params
  const params = useParams();
  const id = params.id;

  //hooks
  const { dataBlogIdRefetch } = useBlogId(id);
  const { dataBlogRefetch } = useBlogList();
  const { uploadImages, isUploading } = useImageUploading();

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
      author: blogId?.author,
    },
  });

  const { reset } = methods;

  useEffect(() => {
    if (blogId) {
      reset({
        title: blogId.title,
        description: blogId.metaDescription,
        image: blogId.image,
        slug: blogId.slug,
        content: blogId.content,
        cateBlog: blogId.category,
        tag: blogId.tags,
        author: blogId.author,
      });
    }
  }, [blogId, reset]);

  const onSubmit = async (data, e) => {
    e.preventDefault();

    let imageUrls = [];

    // Nếu có file ảnh trong data.image, upload chúng trước
    if (data.image && data.image.length > 0) {
      imageUrls = await uploadImages(data.image);
    }

    try {
      const res = await updateBlog({
        _id: id,
        title: data.title,
        slug: data.slug,
        metaDescription: data.description,
        content: data.content,
        image: imageUrls.length > 0 ? imageUrls[0] : blogId.image,
        category: data.cateBlog.value,
        tags: data.tag,
        author: data.author,
        canonicalUrl: `/tin-tuc/${data.slug}`,
      }).unwrap();
      if (res) {
        toast.success("Cập nhật thành công!");
        dataBlogRefetch();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
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
              Chỉnh Sửa Bài Viết
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditBlogForm;
