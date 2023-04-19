import { Router } from "express";
import {
  createRestaurantController,
  deleteRestaurantController,
  getAllRestaurantByIdController,
  getAllRestaurantsController,
  updateRestaurantController,
  getAllRestaurantsWithCuisinesController,
  getRestaurantByPathController,
} from "./restaurants.controller";
import { auth } from "../../middleware/auth";
import { isAppAdmin } from "../../middleware/isAppAdmin";

const router = Router();

router.get("/", getAllRestaurantsController);
router.get("/path/:path", getRestaurantByPathController);
router.get("/withcuisines/all", getAllRestaurantsWithCuisinesController);
router.get("/id/:id", getAllRestaurantByIdController);
router.post("/", auth, isAppAdmin, createRestaurantController);
router.put("/id/:id", updateRestaurantController);
router.delete("/id/:id", deleteRestaurantController);

export default router;
