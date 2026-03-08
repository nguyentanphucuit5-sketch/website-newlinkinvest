import { API } from "@/lib/Constant/Constant";
import { apiSlice } from "./apiSlice";

export const imageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (formData) => {
        return {
          url: `${API.IMAGE}`,
          method: "POST",
          body: formData,
        };
      },
    }),

    deleteImage: builder.mutation({
      query: (data) => {
        return {
          url: `${API.IMAGE}`,
          method: "DELETE",
          body: data,
        };
      },
    }),
  }),
});

export const { useUploadImageMutation, useDeleteImageMutation } = imageApiSlice;
