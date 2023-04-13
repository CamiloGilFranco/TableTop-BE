import { Router } from "express";
import {
  createCuisineRestaurantController,
  deleteCuisineRestaurantController,
  getAllCuisineRestaurantController,
  getCuisineRestaurantByIdController,
  updateCuisineRestaurantController,
} from "./cuisinesRestaurant.controller";

const router = Router();

router.get("/", getAllCuisineRestaurantController);
router.get("/:id", getCuisineRestaurantByIdController);
router.post("/", createCuisineRestaurantController);
router.put("/:id", updateCuisineRestaurantController);
router.delete("/:id", deleteCuisineRestaurantController);

export default router;
