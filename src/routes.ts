import { Application } from "express";

import healthcheck from "./api/healthcheck";
import users from "./api/users";
import restaurants from "./api/restaurants";
import dishes from "./api/dishes";
import cuisineCategories from "./api/cuisineCategories";
import cuisineRestaurants from "./api/cuisinesRestaurant";
import restaurantPhotos from "./api/restaurantPhotos";
import facilities from "./api/facilities";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", users);
  app.use("/api/restaurants", restaurants);
  app.use("/api/dishes", dishes);
  app.use("/api/cuisine-categories", cuisineCategories);
  app.use("/api/cuisine-per-restaurant", cuisineRestaurants);
  app.use("/api/photos-restaurant", restaurantPhotos);
  app.use("/api/facilities", facilities);
};
export default routes;
