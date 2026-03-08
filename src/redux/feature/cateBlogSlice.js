import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cateBlog: [],
  cateBlogId: "",
};

const cateBlogSlice = createSlice({
  name: "cateBlog",
  initialState,
  reducers: {
    setCateBlogList: (state, action) => {
      state.cateBlog = action.payload;
    },
    setCateBlogId: (state, action) => {
      state.cateBlogId = action.payload;
    },
  },
});

export const { setCateBlogList, setCateBlogId } = cateBlogSlice.actions;

export default cateBlogSlice.reducer;
