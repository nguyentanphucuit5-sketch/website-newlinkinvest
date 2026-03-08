import { API } from "@/lib/Constant/Constant.js";
import { apiSlice } from "./apiSlice.js";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Đăng ký cho người dùng (user)
    registerUser: builder.mutation({
      query: (data) => {
        return {
          url: `${API.AUTH}/register`,
          method: "POST",
          body: data,
        };
      },
    }),

    // Đăng ký cho tài khoản manager (Chỉ Admin mới có quyền này)
    register: builder.mutation({
      query: (data) => {
        return {
          url: `${API.AUTH}/admin`,
          method: "POST",
          body: data,
        };
      },
    }),

    // Lấy thông tin toàn bộ tài khoản (Chỉ Admin mới có quyền này)
    getAccount: builder.query({
      query: () => {
        return {
          url: `${API.AUTH}/admin`,
        };
      },
    }),

    //Lấy dữ liệu của cá nhân
    getProfile: builder.query({
      query: (id) => {
        return {
          url: `${API.AUTH}/account/${id}`,
        };
      },
    }),

    // Cập nhật thông tin tài khoản
    updateAccount: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `${API.AUTH}/account/${id}`,
          method: "PATCH",
          body: data,
        };
      },
    }),

    // Xóa tài khoản - Xóa mềm (Chỉ Admin mới có quyền này)
    deleteAccount: builder.mutation({
      query: (id) => {
        return {
          url: `${API.AUTH}/admin/${id}`,
          method: "DELETE",
          body: { action: "delete" },
        };
      },
    }),

    // Khôi phục tài khoản đã xóa mền (Chỉ Admin mới có quyền này)
    restoreAccount: builder.mutation({
      query: (id) => {
        return {
          url: `${API.AUTH}/admin/${id}`,
          method: "DELETE",
          body: { action: "restore" },
        };
      },
    }),

    // Đổi mật khẩu (Ai cũng có quyền này)
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: `${API.AUTH}/account/change-password/${data._id}`,
          method: "PATCH",
          body: {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
          },
        };
      },
    }),

    // Gửi email xác minh tài khoản
    sendVerify: builder.mutation({
      query: (email) => {
        return {
          url: `${API.AUTH}/account/send-verify-email`,
          method: "POST",
          body: email,
        };
      },
    }),

    // Nhận email xác minh tài khoản
    verifyEmail: builder.mutation({
      query: (token) => {
        return {
          url: `${API.AUTH}/account/verify-email`,
          method: "POST",
          body: token,
        };
      },
    }),

    // Gửi email đặt lại mật khẩu
    sendResetPassword: builder.mutation({
      query: (email) => {
        return {
          url: `${API.AUTH}/account/send-reset-password`,
          method: "POST",
          body: email,
        };
      },
    }),

    // Đặt lại mật khẩu
    resetPassword: builder.mutation({
      query: (data) => {
        return {
          url: `${API.AUTH}/account/reset-password`,
          method: "POST",
          body: data,
        };
      },
    }),

  }),
});

export const {
  useRegisterUserMutation,
  useRegisterMutation,
  useGetAccountQuery,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
  useChangePasswordMutation,
  useRestoreAccountMutation,
  useGetProfileQuery,
  useSendVerifyMutation,
  useVerifyEmailMutation,
  useSendResetPasswordMutation,
  useResetPasswordMutation,
} = authApiSlice;
