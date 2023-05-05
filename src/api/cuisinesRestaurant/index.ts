import { Router } from "express";
import {
  createCuisineRestaurantController,
  deleteCuisineRestaurantController,
  getAllCuisineRestaurantController,
  getCuisineRestaurantByIdController,
  updateCuisineRestaurantController,
} from "./cuisinesRestaurant.controller";
import { auth } from "../../middleware/auth";
import { checkUserActive } from "../../middleware/checkUserActive";

const router = Router();

router.get("/", getAllCuisineRestaurantController);
router.get("/:id", getCuisineRestaurantByIdController);
router.post("/", auth, checkUserActive, createCuisineRestaurantController);
router.put("/:id", updateCuisineRestaurantController);
router.patch("/:id", auth, checkUserActive, deleteCuisineRestaurantController);

export default router;
