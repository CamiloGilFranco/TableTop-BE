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
import { isRestaurantAdmin } from "../../middleware/isRestaurantAdmin";

const router = Router();

router.get("/", getAllCuisineRestaurantController);
router.get("/:id", getCuisineRestaurantByIdController);
router.post("/", auth, checkUserActive, createCuisineRestaurantController);
router.put("/:id", updateCuisineRestaurantController);
router.delete("/:id", deleteCuisineRestaurantController);

export default router;
