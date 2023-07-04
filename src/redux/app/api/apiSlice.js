import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const BASE_URL = "http://localhost:3500";
// const BASE_URL = "https://elitehomestest.onrender.com/api/v1";s
export const BASE_URL = "http://52.23.76.53/api/v1";

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
