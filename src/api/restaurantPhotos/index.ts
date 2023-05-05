import { Router } from "express";
import {
  createPhotosRestaurantController,
  deleteCuisineRestaurantController,
  getAllPhotosRestaurantController,
  getPhotosRestaurantByIdController,
  updatePhotosRestaurantController,
} from "./restaurantPhotos.controller";
import { formData } from "../../middleware/formData";
import { auth } from "../../middleware/auth";
import { checkUserActive } from "../../middleware/checkUserActive";

const router = Router();

router.get("/", getAllPhotosRestaurantController);
router.get("/:id", getPhotosRestaurantByIdController);
router.post(
  "/",
  formData,
  auth,
  checkUserActive,
  createPhotosRestaurantController
);
router.put("/:id", updatePhotosRestaurantController);
router.delete("/:id", auth, checkUserActive, deleteCuisineRestaurantController);

export default router;
