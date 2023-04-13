import { Router } from "express";
import {
  createCuisineCategoryController,
  deleteCuisineCategoryController,
  getAllCuisineCategoryController,
  getCuisineCategoryByIdController,
  updateCuisineCategoryController,
} from "./cuisineCategories.controller";

const router = Router();

router.get("/", getAllCuisineCategoryController);
router.post("/", createCuisineCategoryController);
router.get("/:id", getCuisineCategoryByIdController);
router.put("/:id", updateCuisineCategoryController);
router.delete("/:id", deleteCuisineCategoryController);

export default router;
