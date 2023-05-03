import { Router } from "express";
import {
  createRestaurantVenuesController,
  deleteRestaurantVenuesController,
  getAllRestaurantVenuesController,
  getByIdRestaurantVenuesController,
  updateByIdRestaurantVenuesController,
} from "./restaurantVenues.controller";
import { isRestaurantAdmin } from "../../middleware/isRestaurantAdmin";
import { auth } from "../../middleware/auth";
import { formData } from "../../middleware/formData";
import { checkUserActive } from "../../middleware/checkUserActive";

const router = Router();

router.get("/", getAllRestaurantVenuesController);
router.get("/:id", getByIdRestaurantVenuesController);
router.post(
  "/",
  auth,
  checkUserActive,
  isRestaurantAdmin,
  formData,
  createRestaurantVenuesController
);
router.put(
  "/:id",
  auth,
  isRestaurantAdmin,
  updateByIdRestaurantVenuesController
);
router.patch("/:id", auth, isRestaurantAdmin, deleteRestaurantVenuesController);

export default router;
