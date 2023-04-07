import { Application } from "express";

import healthcheck from "./api/healthcheck";
import users from "./api/users";
import restaurants from "./api/restaurants";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", users);
  app.use("/api/restaurants", restaurants);
};
export default routes;
