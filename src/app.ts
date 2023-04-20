import express, { Express } from "express";
import configExpress from "./config/express";
import routes from "./routes";
import { PORT } from "../constants/secret";

const app: Express = express();

const port = PORT;

//config
configExpress(app);

//Setup config
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
