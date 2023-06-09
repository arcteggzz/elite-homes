import { apiSlice } from "../../app/api/apiSlice";

export const propertyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //for testing purposes only
    getAllProperties: builder.query({
      query: () => "/properties",
    }),
    //signup route from backend
    getSingleProperty: builder.query({
      query: (propertyId) => `/properties/${propertyId}`,
    }),
  }),
});

export const { useGetAllPropertiesQuery, useGetSinglePropertyQuery } =
  propertyApiSlice;
