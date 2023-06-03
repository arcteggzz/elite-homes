import { apiSlice } from "../../app/api/apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdmins: builder.query({
      query: () => "/admins",
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetAdminsQuery } = adminApiSlice;
