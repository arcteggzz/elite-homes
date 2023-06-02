import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  accessToken: null,
  userImage: null,
  // userName: "Oghenetega Esedere",
  // accessToken: "TThhbfnkdofb",
  // userImage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { _username, accessToken } = action.payload;
      state.userName = _username;
      state.accessToken = accessToken;
      state.userImage = "";
    },
    resetCredentials: (state) => {
      state.userName = null;
      state.accessToken = null;
      state.userImage = null;
    },
  },
});
export const { setCredentials, resetCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUserName = (state) => state.auth.userName;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectCurrentUserImage = (state) => state.auth.userImage;
