import { Router } from "express";
import {
  createRestaurantVenuesController,
  deleteRestaurantVenuesController,
  getAllRestaurantVenuesController,
  getByIdRestaurantVenuesController,
  updateByIdRestaurantVenuesController,
} from "./restaurantVenues.controller";
import { isRestaurantAdmin } from "../../middleware/isRestaurantAdmin";
import { auth } from "../../middleware/auth";

const router = Router();

router.get("/", getAllRestaurantVenuesController);
router.get("/:id", getByIdRestaurantVenuesController);
router.post("/", createRestaurantVenuesController);
router.put("/:id", auth, isRestaurantAdmin, updateByIdRestaurantVenuesController);
router.delete("/:id", auth, isRestaurantAdmin, deleteRestaurantVenuesController);

export default router;
