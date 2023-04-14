import { Router } from "express";
import {
  createOrderDetailController,
  deleteOrderDetailController,
  getAllOrderDetailsController,
  getOrderDetailByIdController,
  updateOrderDetailController,
} from "./orderDetails.controller";

const router = Router();

router.get("/", getAllOrderDetailsController);
router.get("/:id", getOrderDetailByIdController);
router.post("/", createOrderDetailController);
router.put("/:id", updateOrderDetailController);
router.delete("/:id", deleteOrderDetailController);

export default router;
