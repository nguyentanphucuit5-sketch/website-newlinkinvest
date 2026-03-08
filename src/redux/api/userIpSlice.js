import { API } from "@/lib/Constant/Constant";
import { apiSlice } from "./apiSlice";

export const userIpApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIP: builder.mutation({
      query: () => {
        return {
          url: `${API.USERIP}`,
          method: "POST",
        };
      },
    }),
  }),
});

export const { useGetIPMutation } = userIpApiSlice;
