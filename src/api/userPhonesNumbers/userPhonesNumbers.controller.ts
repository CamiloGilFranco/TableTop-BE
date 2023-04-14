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
      return res.status(404).json({ message: "User Phone Number Not Fpound" });
    }
    res
      .status(200)
      .json({ message: "user phones numbers Found", data: userPhoneNumbers });
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
      .json({ message: "user phone number Found", data: userPhoneNumber });
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
      .json({ message: "user phone number Created", data: userPhoneNumber });
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
      .json({ message: "user phone number updated", data: userPhoneNumber });
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
      .json({ message: "user phone Deleted", data: userPhoneNumber });
  } catch (error) {
    next(error);
  }
};
