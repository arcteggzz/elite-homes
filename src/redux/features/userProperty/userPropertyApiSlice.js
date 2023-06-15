import { apiSlice } from "../../app/api/apiSlice";

export const userPropertyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getAllPropertiesSelling: builder.query({
    //   query: (userId) => `/properties/selling/${userId}`,
    // }),
    // getAllPropertiesBuying: builder.query({
    //   query: (userId) => `/properties/buying/${userId}`,
    // }),
    createProperty: builder.mutation({
      query: (propertyObject) => ({
        url: `/properties`,
        method: "POST",
        body: propertyObject,
      }),
    }),
  }),
});

export const {
  // useGetAllPropertiesSellingQuery,
  // useGetAllPropertiesBuyingQuery,
  useCreatePropertyMutation,
} = userPropertyApiSlice;
