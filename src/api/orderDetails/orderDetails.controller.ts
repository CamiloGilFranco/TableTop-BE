import { Request, Response, NextFunction } from "express";
import {
  createOrderDetail,
  deleteOrderDetail,
  getAllOrderDetails,
  getOrderDetailById,
  updateOrderDetail,
} from "./orderDetails.service";

export const getAllOrderDetailsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderDetails = await getAllOrderDetails();
    res.status(200).json({
      message: "Order details found!",
      data: orderDetails,
    });
  } catch (error) {
    next(error);
  }
};

export const getOrderDetailByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const orderDetail = await getOrderDetailById(id);

    if (!orderDetail) {
      return res.status(404).json({ message: "Order detail not found" });
    }
    res.status(200).json({ message: "Order detail found", data: orderDetail });
  } catch (error) {
    next(error);
  }
};

export const createOrderDetailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderDetail = await createOrderDetail(req.body);
    res
      .status(201)
      .json({ message: "Order detail created", data: orderDetail });
  } catch (error) {
    next(error);
  }
};

export const updateOrderDetailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const orderDetail = await updateOrderDetail(id, req.body);
    res
      .status(201)
      .json({ message: "Order detail updated", data: orderDetail });
  } catch (error) {
    next(error);
  }
};

export const deleteOrderDetailController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const orderDetail = await deleteOrderDetail(id);
    res
      .status(200)
      .json({ message: "Order detail deleted", data: orderDetail });
  } catch (error) {
    next(error);
  }
};
