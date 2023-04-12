import { Application } from "express";

import healthcheck from "./api/healthcheck";
import users from "./api/users";
import restaurants from "./api/restaurants";
import dishes from "./api/dishes";
import cuisineCategories from "./api/cuisineCategories";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", users);
  app.use("/api/restaurants", restaurants);
  app.use("/api/dishes", dishes);
  app.use("/api/cuisine-categories", cuisineCategories);
};
export default routes;
