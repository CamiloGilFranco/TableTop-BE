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
  addAdminToRestaurantController,
  updateRestaurantRatingController,
} from "./restaurants.controller";
import { auth } from "../../middleware/auth";
import { isAppAdmin } from "../../middleware/isAppAdmin";
import { checkUserActive } from "../../middleware/checkUserActive";
import { isRestaurantAdmin } from "../../middleware/isRestaurantAdmin";
import { formData } from "../../middleware/formData";

const router = Router();

router.put("/rating", updateRestaurantRatingController);
router.get("/", getAllRestaurantsController);
router.get("/path/:path", getRestaurantByPathController);
router.get("/withcuisines/all", getAllRestaurantsWithCuisinesController);
router.get("/id/:id", getAllRestaurantByIdController);
router.post("/", auth, isAppAdmin, formData, createRestaurantController);
router.put(
  "/update/:id",
  auth,
  isRestaurantAdmin,
  formData,
  updateRestaurantController
);
router.get("/byuser/:user_id", getRestaurantByUserController);
router.put("/deactivate/:id", auth, isAppAdmin, deactivateRestaurantController);
router.put(
  "/add-admin",
  auth,
  checkUserActive,
  isRestaurantAdmin,
  addAdminToRestaurantController
);

export default router;
