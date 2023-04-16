import { Request, Response, NextFunction } from "express";
import {
  createFacilityVenue,
  deleteFacilityVenue,
  getAllFacilitiesVenue,
  getFacilityVenueById,
  updateFacilityVenue,
} from "./facilitiesVenue.service";

export const getAllFacilitiesVenueController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const facilitiesVenue = await getAllFacilitiesVenue();
    res.status(200).json({
      message: "Facilities per venue found!",
      data: facilitiesVenue,
    });
  } catch (error) {
    next(error);
  }
};

export const getFacilityVenueByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const facilityVenue = await getFacilityVenueById(id);

    if (!facilityVenue) {
      return res.status(404).json({ message: "Facility per venue not found" });
    }
    res
      .status(200)
      .json({ message: "Facility per venue found", data: facilityVenue });
  } catch (error) {
    next(error);
  }
};

export const createFacilityVenueController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const facilityVanue = await createFacilityVenue(req.body);
    res
      .status(201)
      .json({ message: "Facility per venue created", data: facilityVanue });
  } catch (error) {
    next(error);
  }
};

export const updateFacilityVenueController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const facilityVenue = await updateFacilityVenue(id, req.body);
    res
      .status(200)
      .json({ message: "Facility per venue Updated", data: facilityVenue });
  } catch (error) {
    next(error);
  }
};

export const deleteFacilityVenueController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const facilityVanue = await deleteFacilityVenue(id);
    res
      .status(200)
      .json({ message: "Facility per venue deleted", data: facilityVanue });
  } catch (error) {
    next(error);
  }
};
