import { Application } from "express";

import healthcheck from "./api/healthcheck";
import users from "./api/users";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/users", users);
};
export default routes;
