import { apiSlice } from "../../app/api/apiSlice";
import { apiRoutePaths } from "../../../utils/apiRoutePaths";

export const propertyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: () => `${apiRoutePaths.allProperty}`,
    }),
    getSingleProperty: builder.query({
      query: (propertyId) => `${apiRoutePaths.allProperty}/${propertyId}`,
    }),
  }),
});

export const { useGetAllPropertiesQuery, useGetSinglePropertyQuery } =
  propertyApiSlice;
