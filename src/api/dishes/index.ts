import { Router } from "express";
import {
  createDishController,
  deleteDishController,
  getAllDishesController,
  getDishByIdController,
  updateDishController,
} from "./dishes.controller";
import { auth } from "../../middleware/auth";
import { checkUserActive } from "../../middleware/checkUserActive";

const router = Router();

router.get("/", getAllDishesController);
router.post("/", createDishController);
router.get("/:id", getDishByIdController);
router.put("/:id", auth, checkUserActive, updateDishController);
router.patch("/:id", auth, checkUserActive, deleteDishController);

export default router;
