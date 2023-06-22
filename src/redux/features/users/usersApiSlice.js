import { apiSlice } from "../../app/api/apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //for testing purposes only
    getAllUsers: builder.query({
      query: () => "/users",
    }),
    //for testing purposes only
    createUserMock: builder.mutation({
      query: (userObject) => ({
        // url: "/users",
        url: "/users",
        method: "POST",
        body: userObject,
      }),
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
    propertyBooking: builder.mutation({
      query: (bookingObject) => ({
        url: "/booking",
        method: "POST",
        body: bookingObject,
      }),
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useRegisterUserMutation,
  usePropertyBookingMutation,
  useCreateUserMockMutation,
} = userApiSlice;
