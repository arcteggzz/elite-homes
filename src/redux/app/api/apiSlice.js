import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  setCredentials,
  resetCredentials,
} from "../../features/auth/authSlice";

const BASE_URL = "http://localhost:3500";
const REFRESH_ENDPOINT_URL = "/refresh";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    //get the current state from the store
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

//this wrapper function enables us to send our request again if we have a refresh token that is still valid.
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  //here we are looking for a 403 error because the backedn api sends a 403 error if the access token has expired.
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    //here we are sending it to the /refresh endpoint of the backend
    const refreshResult = await baseQuery(
      REFRESH_ENDPOINT_URL,
      api,
      extraOptions
    );
    console.log(refreshResult);
    if (refreshResult?.data) {
      const userName = api.getState().auth.userName;
      const userImage = api.getState().auth.userImage;
      const userId = api.getState().auth.userId;
      // store the new token
      api.dispatch(
        setCredentials({ ...refreshResult.data, userName, userImage, userId })
      );
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(resetCredentials());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
