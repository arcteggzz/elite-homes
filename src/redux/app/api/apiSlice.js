import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../utils/apiRoutePaths";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  //this sends the http cookie with every request
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    //get the current state from the store
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,
//   }),
//   // eslint-disable-next-line no-unused-vars
//   endpoints: (builder) => ({}),
// });

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
