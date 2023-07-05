import { apiSlice } from "../../app/api/apiSlice";
import { apiRoutePaths } from "../../../utils/apiRoutePaths";

export const userPropertyApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPropertiesSelling: builder.query({
      query: (userId) => apiRoutePaths.userProperty.selling(userId),
    }),
    getAllPropertiesBuying: builder.query({
      query: (userId) => apiRoutePaths.userProperty.buying(userId),
    }),
    createProperty: builder.mutation({
      query: (propertyObject) => ({
        url: `${apiRoutePaths.allProperty}`,
        method: "POST",
        body: propertyObject,
      }),
    }),
  }),
});

export const {
  useGetAllPropertiesSellingQuery,
  useGetAllPropertiesBuyingQuery,
  useCreatePropertyMutation,
} = userPropertyApiSlice;
