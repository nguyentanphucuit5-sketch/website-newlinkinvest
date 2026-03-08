import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  profile: {},
  profileUser: {},
  accountList: [],
  accountManager: [],
  accountUser: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    setProfileUser: (state, action) => {
      state.profileUser = action.payload;
    },
    setAccountList: (state, action) => {
      state.accountList = action.payload;
    },
    setAccountManager: (state, action) => {
      state.accountManager = action.payload;
    },
    setAccountUser: (state, action) => {
      state.accountUser = action.payload;
    },
  },
});

export const {
  setAuth,
  setProfile,
  setProfileUser,
  setAccountList,
  setAccountManager,
  setAccountUser,
} = authSlice.actions;

export default authSlice.reducer;
