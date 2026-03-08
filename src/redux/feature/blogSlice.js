import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [],
  blogId: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogList: (state, action) => {
      state.blog = action.payload;
    },
    setBlogId: (state, action) => {
      state.blogId = action.payload;
    },
  },
});

export const { setBlogList, setBlogId } = blogSlice.actions;

export default blogSlice.reducer;
