import { apiSlice } from "../../app/api/apiSlice";

export const propertyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => "/properties",
    }),
    getSingleProperty: builder.query({
      query: (propertyId) => `/properties/${propertyId}`,
    }),
  }),
});

export const { useGetAllPropertiesQuery, useGetSinglePropertyQuery } =
  propertyApiSlice;
