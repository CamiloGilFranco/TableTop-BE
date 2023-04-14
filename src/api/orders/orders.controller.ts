import { Request, Response, NextFunction } from "express";
import {
  createOrder,
  deleteOrder,
  getAllorders,
  getOrderById,
  updateOrderById,
} from "./orders.service";

export const getAllOrdersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await getAllorders();
    res.status(200).json({ message: "Orders found!", data: orders });
  } catch (error) {
    next(error);
  }
};

export const getOrderByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const order = await getOrderById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Orden found", data: order });
  } catch (error) {
    next(error);
  }
};

export const createOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json({ message: "Order created", data: order });
  } catch (error) {
    next(error);
  }
};

export const updateOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const order = await updateOrderById(id, req.body);
    res.status(200).json({ message: "Order Updated", data: order });
  } catch (error) {
    next(error);
  }
};

export const deleteOrderController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const order = await deleteOrder(id);

    if (!order) {
      return res.status(404).json({ message: "Order Not Found" });
    }
    res.status(200).json({ message: "Order deleted", data: order });
  } catch (error) {
    next(error);
  }
};
