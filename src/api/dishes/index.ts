import { Router } from "express";
import {
  createDishController,
  deleteDishController,
  getAllDishesController,
  getDishByIdController,
  updateDishController,
} from "./dishes.controller";

const router = Router();

router.get("/", getAllDishesController);
router.post("/", createDishController);
router.get("/:id", getDishByIdController);
router.put("/:id", updateDishController);
router.delete("/:id", deleteDishController);

export default router;
