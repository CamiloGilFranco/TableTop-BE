import { Router } from "express";
import {
  createRestaurantVenuesController,
  deleteRestaurantVenuesController,
  getAllRestaurantVenuesController,
  getByIdRestaurantVenuesController,
  updateByIdRestaurantVenuesController,
} from "./restaurantVenues.controller";

const router = Router();

router.get("/", getAllRestaurantVenuesController);
router.get("/:id", getByIdRestaurantVenuesController);
router.post("/", createRestaurantVenuesController);
router.put("/:id", updateByIdRestaurantVenuesController);
router.delete("/:id", deleteRestaurantVenuesController);

export default router;
