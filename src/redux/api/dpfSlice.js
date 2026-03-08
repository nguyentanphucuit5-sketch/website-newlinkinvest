import { API } from "@/lib/Constant/Constant";
import { apiSlice } from "./apiSlice";

export const pdfApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    uploadPdf: builder.mutation({
      query: (formData) => {
        console.log("API.PDF =", API.PDF); //
        return {
          url: `${API.PDF}`,
          method: "POST",
          body: formData,
        };
      },
    }),

    sendMail: builder.mutation({
      query: (data) => {
        console.log("API.SEND_RECRUITMENT =", API.SEND_RECRUITMENT); //
        return {
          url: `${API.SEND_RECRUITMENT}`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useUploadPdfMutation, useSendMailMutation } = pdfApiSlice;
