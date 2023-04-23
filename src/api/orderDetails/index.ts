import { Router } from "express";
import {
  createOrderDetailController,
  deleteOrderDetailController,
  getAllOrderDetailsController,
  getOrderDetailByIdController,
  updateOrderDetailController,
  createSeveralOrderDetailController,
} from "./orderDetails.controller";

const router = Router();

router.get("/", getAllOrderDetailsController);
router.get("/:id", getOrderDetailByIdController);
router.post("/", createOrderDetailController);
router.put("/:id", updateOrderDetailController);
router.delete("/:id", deleteOrderDetailController);
router.post("/several", createSeveralOrderDetailController);

export default router;
