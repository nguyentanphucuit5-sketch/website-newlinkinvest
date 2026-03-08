import { DOMAIN } from "@/lib/Constant/Constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: DOMAIN });

const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

export { apiSlice };
