import { Request, Response, NextFunction } from "express";
import {
  createOrder,
  deleteOrder,
  getAllorders,
  getOrderById,
  updateOrderById,
} from "./orders.service";
import { AuthUser } from "../../auth/auth.types";
import { sendNodemailer } from "../../config/nodemailer";
import { orderEmail, welcomeEmail } from "../../utils/emails";
import { getUserById } from "../users/users.services";

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
  req: Request & AuthUser,
  res: Response
) => {
  try {
    let user: string;
    user = req.user as string;
    const { price, address_id, address, city, cart } = req.body;

    const order = await createOrder({ user, price, address_id });

    const userData = await getUserById(user);

    console.log(userData!.email);

    await sendNodemailer(
      orderEmail({
        price,
        name: userData!.name,
        email: userData!.email,
        order: order.id_order,
        address,
        city,
        cart,
      })
    );

    res.status(201).json({ message: "Order created", data: order });
  } catch (error) {
    res.status(500).json({ message: "Order can't be created" });
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
