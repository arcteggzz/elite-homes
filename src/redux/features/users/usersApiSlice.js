import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //for testing purposes only
    getAllUsers: builder.query({
      query: () => "/users",
    }),
    //signup route from backend
    registerUser: builder.mutation({
      query: (userObject) => ({
        // url: "/users",
        url: "/register",
        method: "POST",
        body: userObject,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery, useRegisterUserMutation } = userApiSlice;
