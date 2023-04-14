import { Request, Response, NextFunction } from "express";
import {
  createUserAddress,
  deleteUserAddress,
  getAllUserAddresses,
  getUserAddressById,
  updateUserAddress,
} from "./userAddresses.service";

export const getAllUserAddressesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAddresses = await getAllUserAddresses();
    res
      .status(200)
      .json({ message: "User Addresses Found!", data: userAddresses });
  } catch (error) {
    next(error);
  }
};

export const getUserAddressByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userAddress = await getUserAddressById(id);
    if (!userAddress) {
      return res.status(404).json({ message: "user address not found!" });
    }
    res.status(200).json({ message: "user address found", data: userAddress });
  } catch (error) {
    next(error);
  }
};

export const createUserAddresController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAddress = await createUserAddress(req.body);
    res
      .status(201)
      .json({ message: "user address created succesfully", data: userAddress });
  } catch (error) {
    next(error);
  }
};

export const updateUserAddressController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userAddress = await updateUserAddress(id, req.body);
    res
      .status(200)
      .json({ message: "User Address updated", data: userAddress });
  } catch (error) {
    next(error);
  }
};

export const deleteUserAddressController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userAddress = await deleteUserAddress(id);
    res
      .status(200)
      .json({ message: "User Address Deleted", data: userAddress });
  } catch (error) {
    next(error);
  }
};
