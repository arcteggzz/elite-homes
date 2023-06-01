import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "Oghenetega Esedere",
  accessToken: "TThhbfnkdofb",
  userImage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken, userImage } = action.payload;
      state.userName = user;
      state.accessToken = accessToken;
      state.userImage = userImage;
    },
    logOut: (state) => {
      state.userName = null;
      state.accessToken = null;
      state.userImage = null;
    },
  },
});
export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUserName = (state) => state.auth.userName;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectCurrentUserImage = (state) => state.auth.userImage;
