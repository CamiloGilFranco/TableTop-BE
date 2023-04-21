import { Router } from "express";
import {
  createRestaurantController,
  deactivateRestaurantController,
  getAllRestaurantByIdController,
  getAllRestaurantsController,
  updateRestaurantController,
  getAllRestaurantsWithCuisinesController,
  getRestaurantByPathController,
  getRestaurantByUserController,
} from "./restaurants.controller";
import { auth } from "../../middleware/auth";
import { isAppAdmin } from "../../middleware/isAppAdmin";

const router = Router();

router.get("/", getAllRestaurantsController);
router.get("/path/:path", getRestaurantByPathController);
router.get("/withcuisines/all", getAllRestaurantsWithCuisinesController);
router.get("/id/:id", getAllRestaurantByIdController);
router.post("/", auth, isAppAdmin, createRestaurantController);
router.put("/update/:id", auth, updateRestaurantController);
router.get('/byuser/:id', getRestaurantByUserController);
router.put("/deactivate/:id", auth, isAppAdmin, deactivateRestaurantController);

export default router;
