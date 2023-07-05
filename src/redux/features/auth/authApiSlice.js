import { apiSlice } from "../../app/api/apiSlice";
import { apiRoutePaths } from "../../../utils/apiRoutePaths";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        // url: "/auth",
        url: `${apiRoutePaths.auth.login}`,
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${apiRoutePaths.auth.logout}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApiSlice;
