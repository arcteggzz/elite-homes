// export const BASE_URL = "http://localhost:3500";
// export const BASE_URL = "https://elitehomestest.onrender.com/api/v1";s
export const BASE_URL = "http://52.23.76.53/api/v1";

export const apiRoutePaths = {
  auth: {
    register: "/register",
    login: "/login",
    logout: "/auth/logout",
  },
  allProperty: "/properties",
  userProperty: {
    selling: (userId) => {
      return `/users/${userId}/properties`;
    },
    buying: (userId) => {
      return `/users/${userId}/bookings`;
    },
  },
  makeBooking: "/booking",
};
