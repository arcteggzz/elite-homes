import { apiSlice } from "../../app/api/apiSlice";
import { apiRoutePaths } from "../../../utils/apiRoutePaths";

export const favoritesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllFavoriteProperties: builder.query({
      query: (userId) => apiRoutePaths.userFavoritesList(userId),
      keepUnusedDataFor: 0,
    }),
  }),
});

export const { useGetAllFavoritePropertiesQuery } = favoritesApiSlice;
