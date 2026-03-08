"use client";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { useSelector } from "react-redux";
import StaffInfoUI from "../StaffUI/StaffInfoUI";
import StaffImageUI from "../StaffUI/StaffImageUI";

const AddStaffForm = () => {
  // redux
  const { fullName } = useSelector((state) => state.auth.profile);

  const methods = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      bio: "",
      role: "",
      image: "",
    },
  });

  useEffect(() => {
    if (fullName) {
      methods.reset({
        ...methods.getValues(),
      });
    }
  }, [fullName]);

  const onSubmit = async (data, e) => {
    e.preventDefault();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-[1000px] mx-auto flex justify-between"
      >
        <div className="w-[50%] space-y-6">
          <StaffInfoUI />
        </div>
        <div className="w-[45%] space-y-6">
          <StaffImageUI />

          {/* <div className="w-full flex justify-center">
            <Button type="submit" className="mt-4 px-10">
              {isLoading || isUploading ? "Đang đăng bài..." : "Đăng Bài"}
            </Button>
          </div> */}
        </div>
      </form>
    </FormProvider>
  );
};
export default AddStaffForm;
