import { Application } from "express";

import healthcheck from "./api/healthcheck";
import users from "./api/users";
import restaurants from "./api/restaurants";
import dishes from "./api/dishes";
import cuisineCategories from "./api/cuisineCategories";
import cuisineRestaurants from "./api/cuisinesRestaurant";
import restaurantPhotos from "./api/restaurantPhotos";
import facilities from "./api/facilities";
import restaurantVenues from "./api/restaurantVenues";
import dishesCategories from "./api/dishesCategories";
import reservations from "./api/reservations";
import authLocal from "./auth/local";
import usePhoneNumbers from "./api/userPhonesNumbers";
import useAddress from "./api/userAddresses";
import orders from "./api/orders";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", users);
  app.use("/api/restaurants", restaurants);
  app.use("/api/dishes", dishes);
  app.use("/api/cuisine-categories", cuisineCategories);
  app.use("/api/cuisine-per-restaurant", cuisineRestaurants);
  app.use("/api/photos-restaurant", restaurantPhotos);
  app.use("/api/facilities", facilities);
  app.use("/api/restaurant-venues", restaurantVenues);
  app.use("/api/dishes-categories", dishesCategories);
  app.use("/api/reservations", reservations);
  app.use("/api/user-phone-number", usePhoneNumbers);
  app.use("/api/user-address", useAddress);
  app.use("/api/orders", orders);

  // auth routes
  app.use("/auth/local", authLocal);
};
export default routes;
