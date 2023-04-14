import { Request, Response, NextFunction } from "express";
import {
  createFacility,
  deleteFacility,
  getAllFacilities,
  getByIdFacility,
  updateByIdFacility,
} from "./facilities.service";

export const getAllFacilitiesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const facilities = await getAllFacilities();
    res.status(200).json({ message: "facilities found!", data: facilities });
  } catch (error) {
    next(error);
  }
};

export const getByIdFacilityController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const facility = await getByIdFacility(id);
    if (!facility) {
      return res.status(404).json({ message: "facility not found" });
    }
    res.status(200).json({ message: "facility found", data: facility });
  } catch (error) {
    next(error);
  }
};

export const createFacilityController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const facility = await createFacility(req.body);
    res.status(201).json({ message: "facility created", data: facility });
  } catch (error) {
    next(error);
  }
};

export const updateByIdFacilityController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const facility = await updateByIdFacility(id, req.body);
    res.status(200).json({ message: "Facility updated", data: facility });
  } catch (error) {
    next(error);
  }
};

export const deleteFacilityController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const facility = await deleteFacility(id);
    res.status(200).json({ message: "facility deleted", data: facility });
  } catch (error) {
    next(error);
  }
};
