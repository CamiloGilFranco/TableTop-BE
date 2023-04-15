import { Router } from "express";
import {
  createRestaurantController,
  deleteRestaurantController,
  getAllRestaurantByIdController,
  getAllRestaurantsController,
  updateRestaurantController,
  getAllRestaurantsWithCuisinesController,
} from "./restaurants.controller";

const router = Router();

router.get("/", getAllRestaurantsController);
router.get("/:id", getAllRestaurantByIdController);
router.get("/withcuisines/all", getAllRestaurantsWithCuisinesController);
router.post("/", createRestaurantController);
router.put("/:id", updateRestaurantController);
router.delete("/:id", deleteRestaurantController);

export default router;
