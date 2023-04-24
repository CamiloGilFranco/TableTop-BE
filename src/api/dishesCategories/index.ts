import { Router } from "express";
import {
  createDishesCategoryController,
  deleteDishesCategoryController,
  getAllDishesCategoriesController,
  getByIdDishesCategoryController,
  updateByIdDishesCategoryController,
} from "./dishesCategories.controller";
import { checkUserActive } from "../../middleware/checkUserActive";
import { auth } from "../../middleware/auth";

const router = Router();

router.get("/", getAllDishesCategoriesController);
router.get("/:id", getByIdDishesCategoryController);
router.post("/", auth, checkUserActive, createDishesCategoryController);
router.put("/:id", updateByIdDishesCategoryController);
router.patch("/:id", auth, checkUserActive, deleteDishesCategoryController);

export default router;
