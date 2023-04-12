import { Router } from "express";
import {
  createPhotosRestaurantController,
  deleteCuisineRestaurantController,
  getAllPhotosRestaurantController,
  getPhotosRestaurantByIdController,
  updatePhotosRestaurantController,
} from "./restaurantPhotos.controller";

const router = Router();

router.get("/", getAllPhotosRestaurantController);
router.get("/:id", getPhotosRestaurantByIdController);
router.post("/", createPhotosRestaurantController);
router.put("/:id", updatePhotosRestaurantController);
router.delete("/:id", deleteCuisineRestaurantController);

export default router;
