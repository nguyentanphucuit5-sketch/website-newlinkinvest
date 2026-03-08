import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice.js";
import searchReducer from "./feature/searchSlice.js";
import authReducer from "./feature/authSlice.js";
import cateBlogReducer from "./feature/cateBlogSlice.js";
import blogReducer from "./feature/blogSlice.js";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    search: searchReducer,
    auth: authReducer,
    cateBlog: cateBlogReducer,
    blog: blogReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

export default store;
