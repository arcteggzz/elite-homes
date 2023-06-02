import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import propertySlice from "../features/property/propertySlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    propertySlice,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
