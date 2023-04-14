import { Request, Response, NextFunction } from "express";
import {
  createRestaurantVenues,
  deleteRestaurantVenues,
  getAllRestaurantVenues,
  getByIdRestaurantVenues,
  updateByIdRestaurantVenues,
} from "./restaurantVenues.service";

export const getAllRestaurantVenuesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const restaurantVenues = await getAllRestaurantVenues();
    res
      .status(200)
      .json({ message: "Restaurant Venues found", data: restaurantVenues });
  } catch (error) {
    next(error);
  }
};

export const getByIdRestaurantVenuesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const resturantVunues = await getByIdRestaurantVenues(id);
    if (!resturantVunues) {
      return res.status(404).json({ message: "Restaurant venues not found!" });
    }
    res.status(200).json({ message: "Photo found", data: resturantVunues });
  } catch (error) {
    next(error);
  }
};

export const createRestaurantVenuesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const restaurantVenues = await createRestaurantVenues(req.body);
    res
      .status(201)
      .json({ message: "Restaurant venues create", data: restaurantVenues });
  } catch (error) {
    next(error);
  }
};

export const updateByIdRestaurantVenuesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const restaurantVenues = await updateByIdRestaurantVenues(id, req.body);
    res
      .status(200)
      .json({ message: "Restaurant venues updated", data: restaurantVenues });
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurantVenuesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const restaurantVenues = await deleteRestaurantVenues(id);
    res
      .status(200)
      .json({ message: "Restaurant venues deleted", data: restaurantVenues });
  } catch (error) {
    next(error);
  }
};
