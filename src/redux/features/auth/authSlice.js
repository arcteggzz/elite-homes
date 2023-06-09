import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  accessToken: null,
  userImage: null,
  userId: null,
  userEmail: null,
  userPhoneNumber: null,
  // userName: "Oghenetega Esedere",
  // accessToken: "TThhbfnkdofb",
  // userImage: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const {
        username,
        accessToken,
        userImage,
        userId,
        userEmail,
        userPhoneNumber,
      } = action.payload;
      state.userName = username;
      state.accessToken = accessToken;
      state.userImage = userImage;
      state.userId = userId;
      state.userEmail = userEmail;
      state.userPhoneNumber = userPhoneNumber;
    },
    resetCredentials: (state) => {
      state.userName = null;
      state.accessToken = null;
      state.userImage = null;
      state.userId = null;
      state.userEmail = null;
      state.userPhoneNumber = null;
    },
  },
});
export const { setCredentials, resetCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUserName = (state) => state.auth.userName;
export const selectCurrentAccessToken = (state) => state.auth.accessToken;
export const selectCurrentUserImage = (state) => state.auth.userImage;
export const selectCurrentUserId = (state) => state.auth.userId;
export const selectCurrentUserEmail = (state) => state.auth.userEmail;
export const selectCurrentUserPhoneNumber = (state) =>
  state.auth.userPhoneNumber;
