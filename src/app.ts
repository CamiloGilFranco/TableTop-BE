import express, { Express } from "express";
import configExpress from "./config/express";
import { formData } from "./middleware/formData";
import routes from "./routes";

const app: Express = express();

const port = process.env.PORT || 8080;

//config
configExpress(app);

//Setup config
routes(app);

app.post("/send-formdata", formData, (req, res) => {
  res.status(200).json({ ...req.body });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
