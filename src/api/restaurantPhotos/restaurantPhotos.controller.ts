import { Request, Response, NextFunction } from "express";
import {
  createPhotosRestaurant,
  deleteCuisineRestaurant,
  getAllPhotosRestaurant,
  getPhotosRestaurantById,
  updatePhotosRestaurant,
} from "./restaurantPhotos.service";

export const getAllPhotosRestaurantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const photosRestaurant = await getAllPhotosRestaurant();
    res.status(200).json({ message: "Photos Found!", data: photosRestaurant });
  } catch (error) {
    next(error);
  }
};

export const getPhotosRestaurantByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const photoRestaurant = await getPhotosRestaurantById(id);
    if (!photoRestaurant) {
      return res.status(404).json({ message: "Photo not found!" });
    }
    res.status(200).json({ message: "Photo found", data: photoRestaurant });
  } catch (error) {
    next(error);
  }
};

export const createPhotosRestaurantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const photoRestaurant = await createPhotosRestaurant(req.body);
    res.status(201).json({ message: "Photo created succesfully" });
  } catch (error) {
    next(error);
  }
};

export const updatePhotosRestaurantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const photoRestaurant = await updatePhotosRestaurant(id, req.body);
    res.status(200).json({ message: "Photo updated", data: photoRestaurant });
  } catch (error) {
    next(error);
  }
};

export const deleteCuisineRestaurantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const photoRestaurant = await deleteCuisineRestaurant(id);
    res.status(200).json({ message: "Photo found", data: photoRestaurant });
  } catch (error) {
    next(error);
  }
};
