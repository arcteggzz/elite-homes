import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "../features/property/propertySlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    propertySlice,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
