import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "../features/propertySlice/propertySlice";

const store = configureStore({
  reducer: {
    propertySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
