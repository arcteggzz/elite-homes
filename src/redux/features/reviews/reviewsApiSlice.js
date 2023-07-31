import { apiSlice } from "../../app/api/apiSlice";
import { apiRoutePaths } from "../../../utils/apiRoutePaths";

export const reviewsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPropertyReviews: builder.query({
      query: (propertyId) => apiRoutePaths.getReviews(propertyId),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetAllPropertyReviewsQuery } = reviewsApiSlice;
