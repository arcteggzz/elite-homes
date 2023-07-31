// export const BASE_URL = "http://localhost:3500";
// export const BASE_URL = "https://elitehomestest.onrender.com/api/v1";s
// export const BASE_URL = "http://52.23.76.53/api/v1";
// export const BASE_URL = "http://174.129.62.46/api/v1";
export const BASE_URL = "http://54.210.116.44/api/v1";
// export const BASE_URL = "https://elitehomestest.onrender.com/api/v1";
// export const BASE_URL = "https://8cf9-102-88-34-134.ngrok-free.app/api/v1";
// export const BASE_URL = "https://a973-102-88-63-115.ngrok-free.app/api/v1";

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
  addReviews: "/properties/reviews",
  getReviews: (propertyId) => {
    return `/properties/${propertyId}/reviews`;
  },
  makeFavorite: (userId) => {
    return `/favourites/${userId}/properties`;
  },
  userFavoritesList: (userId) => {
    return `/favourites/${userId}/properties`;
  },
};
