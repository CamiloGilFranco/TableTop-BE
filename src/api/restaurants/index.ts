import { Router } from "express";
import {
  createRestaurantController,
  deactivateRestaurantController,
  getAllRestaurantByIdController,
  getAllRestaurantsController,
  updateRestaurantController,
  getAllRestaurantsWithCuisinesController,
  getRestaurantByPathController,
  updateRestaurantRatingController,
} from "./restaurants.controller";
import { auth } from "../../middleware/auth";
import { isAppAdmin } from "../../middleware/isAppAdmin";

const router = Router();

router.put("/rating", updateRestaurantRatingController);
router.get("/", getAllRestaurantsController);
router.get("/path/:path", getRestaurantByPathController);
router.get("/withcuisines/all", getAllRestaurantsWithCuisinesController);
router.get("/id/:id", getAllRestaurantByIdController);
router.post("/", auth, isAppAdmin, createRestaurantController);
router.put("/update/:id", auth, updateRestaurantController);
router.put("/deactivate/:id", auth, isAppAdmin, deactivateRestaurantController);

export default router;
