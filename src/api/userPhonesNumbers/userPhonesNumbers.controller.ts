import { Request, Response, NextFunction } from "express";
import {
  createUserPhoneNumber,
  deleteUserPhoneNumber,
  getAllUserPhoneNumbres,
  getByIdUserPhoneNumber,
  updateByIdUserPhoneNumber,
} from "./userPhonesNumbers.service";

export const getAllUserPhoneNumbresController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userPhoneNumbers = await getAllUserPhoneNumbres();
    if (!userPhoneNumbers) {
      return res.status(404).json({ message: "User phone numbers not found" });
    }
    res
      .status(200)
      .json({ message: "User phone numbers found", data: userPhoneNumbers });
  } catch (error) {
    next(error);
  }
};

export const getByIdUserPhoneNumberController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userPhoneNumber = await getByIdUserPhoneNumber(id);
    res
      .status(200)
      .json({ message: "User phone number found", data: userPhoneNumber });
  } catch (error) {
    next(error);
  }
};

export const createUserPhoneNumberController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userPhoneNumber = await createUserPhoneNumber(req.body);
    res
      .status(201)
      .json({ message: "User phone number created", data: userPhoneNumber });
  } catch (error) {
    next(error);
  }
};

export const updateByIdUserPhoneNumberController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userPhoneNumber = await updateByIdUserPhoneNumber(id, req.body);
    res
      .status(200)
      .json({ message: "User phone number updated", data: userPhoneNumber });
  } catch (error) {
    next(error);
  }
};

export const deleteUserPhoneNumberController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userPhoneNumber = await deleteUserPhoneNumber(id);
    res
      .status(200)
      .json({ message: "User phone number deleted", data: userPhoneNumber });
  } catch (error) {
    next(error);
  }
};
