import { Router } from "express";
import {
  createOrderController,
  deleteOrderController,
  getAllOrdersController,
  getOrderByIdController,
  updateOrderController,
} from "./orders.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.get("/", getAllOrdersController);
router.get("/:id", getOrderByIdController);
router.post("/", auth, createOrderController);
router.put("/:id", updateOrderController);
router.delete("/:id", deleteOrderController);

export default router;
