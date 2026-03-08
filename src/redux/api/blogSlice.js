import { API } from "@/lib/Constant/Constant";
import { apiSlice } from "./apiSlice";


export const blogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBlog: builder.query({
      query: () => {
        return {
          url: `${API.BLOG}`,
        };
      },
    }),

    getBlogById: builder.query({
      query: (id) => {
        return {
          url: `${API.BLOG}/${id}`,
        };
      },
    }),

    addBlog: builder.mutation({
      query: (formData) => {
        return {
          url: `${API.BLOG}`,
          method: "POST",
          body: formData,
        };
      },
    }),

    editBlog: builder.mutation({
      query: (formData) => {
        return {
          url: `${API.BLOG}/${formData._id}`,
          method: "PATCH",
          body: formData,
        };
      },
    }),

    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `${API.BLOG}/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const { useGetBlogQuery, useGetBlogByIdQuery, useAddBlogMutation, useEditBlogMutation, useDeleteBlogMutation } = blogApiSlice;
