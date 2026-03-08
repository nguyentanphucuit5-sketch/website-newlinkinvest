import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productSearch: "",
  cateProductSearch: "",
  orderSearch: "",
  blogSearch: "",
  cateBlogSearch: "",
  accountSearch: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setProductSearch: (state, action) => {
      state.productSearch = action.payload;
    },
    setCateProductSearch: (state, action) => {
      state.cateProductSearch = action.payload;
    },
    setOrderSearch: (state, action) => {
      state.orderSearch = action.payload;
    },
    setBlogSearch: (state, action) => {
      state.blogSearch = action.payload;
    },
    setCateBlogSearch: (state, action) => {
      state.cateBlogSearch = action.payload;
    },
    setAccountSearch: (state, action) => {
      state.accountSearch = action.payload;
    },
    resetSearchState: () => initialState, // thêm hàm reset
  },
});

export const {
  setProductSearch,
  setBlogSearch,
  setCateBlogSearch,
  setCateProductSearch,
  setOrderSearch,
  setAccountSearch,
  resetSearchState,
} = searchSlice.actions;

export default searchSlice.reducer;
