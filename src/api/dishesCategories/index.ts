import { Router } from "express";
import {
  createDishesCategoryController,
  deleteDishesCategoryController,
  getAllDishesCategoriesController,
  getByIdDishesCategoryController,
  updateByIdDishesCategoryController,
} from "./dishesCategories.controller";
import { checkUserActive } from "../../middleware/checkUserActive";
import { isRestaurantAdmin } from "../../middleware/isRestaurantAdmin";
import { auth } from "../../middleware/auth";

const router = Router();

router.get("/", getAllDishesCategoriesController);
router.get("/:id", getByIdDishesCategoryController);
router.post("/", auth, checkUserActive, createDishesCategoryController);
router.put("/:id", updateByIdDishesCategoryController);
router.delete("/:id", deleteDishesCategoryController);

export default router;
