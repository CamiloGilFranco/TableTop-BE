import { Application } from "express";

import healthcheck from "./api/healthcheck";
import users from "./api/users";
import restaurants from "./api/restaurants";
import dishes from "./api/dishes";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", users);
  app.use("/api/restaurants", restaurants);
  app.use("/api/dishes", dishes);
};
export default routes;
