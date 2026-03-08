import { API } from "@/lib/Constant/Constant";
import { apiSlice } from "./apiSlice";

export const cateBlogApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Tạo danh mục blog (quyền của admin, manager)
    createCateBlog: builder.mutation({
      query: (data) => {
        return {
          url: `${API.CATEBLOG}`,
          method: "POST",
          body: data,
        };
      },
    }),

    // Lấy toàn bộ danh mục blog (ko quyền)
    getCateBlog: builder.query({
      query: () => {
        return {
          url: `${API.CATEBLOG}`,
        };
      },
    }),

    // Lấy danh mục blog theo id (ko quyền)
    getIdCateBlog: builder.query({
      query: (id) => {
        return {
          url: `${API.CATEBLOG}/${id}`,
        };
      },
    }),

    // Cập nhật danh mục blog (quyền của admin, manager)
    updateCateBlog: builder.mutation({
      query: ({ id, data }) => {
        return {
          url: `${API.CATEBLOG}/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),

    // Xóa danh mục blog (quyền của admin, manager)
    deleteCateBlog: builder.mutation({
      query: (id) => {
        return {
          url: `${API.CATEBLOG}/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useCreateCateBlogMutation,
  useGetCateBlogQuery,
  useGetIdCateBlogQuery,
  useUpdateCateBlogMutation,
  useDeleteCateBlogMutation,
} = cateBlogApiSlice;
