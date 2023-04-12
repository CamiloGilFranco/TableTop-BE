import { Router } from "express";
import {
  createDishesCategoryController,
  deleteDishesCategoryController,
  getAllDishesCategoriesController,
  getByIdDishesCategoryController,
  updateByIdDishesCategoryController,
} from "./dishesCategories.controller";

const router = Router();

router.get("/", getAllDishesCategoriesController);
router.get("/:id", getByIdDishesCategoryController);
router.post("/", createDishesCategoryController);
router.put("/:id", updateByIdDishesCategoryController);
router.delete("/:id", deleteDishesCategoryController);

export default router;
