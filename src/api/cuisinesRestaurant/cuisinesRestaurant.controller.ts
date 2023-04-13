import { Request, Response, NextFunction } from "express";
import {
  createCuisineRestaurant,
  deleteCuisineRestaurant,
  getAllCuisineRestaurant,
  getCuisineRestaurantById,
  updateCuisineRestaurant,
} from "./cuisinesResturant.service";

export const getAllCuisineRestaurantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cuisineRestaurants = await getAllCuisineRestaurant();
    res.status(200).json({
      message: "Cuisine Restaurants found!",
      data: cuisineRestaurants,
    });
  } catch (error) {
    next(error);
  }
};

export const getCuisineRestaurantByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const cuisineRestaurant = await getCuisineRestaurantById(id);

    if (!cuisineRestaurant) {
      return res
        .status(404)
        .json({ message: "cuisine Restaurant don't exist" });
    }
    res
      .status(200)
      .json({ message: "Category found", data: cuisineRestaurant });
  } catch (error) {
    next(error);
  }
};

export const createCuisineRestaurantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cuisineRestaurant = await createCuisineRestaurant(req.body);
    res
      .status(201)
      .json({ message: "Cuisine Category created", data: cuisineRestaurant });
  } catch (error) {
    next(error);
  }
};

export const updateCuisineRestaurantController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const categoryId = await getCuisineRestaurantById(id);
    if (!categoryId) {
      return res.status(404).json({ message: "Category not found" });
    }
    const cuisineRestaurant = await updateCuisineRestaurant(id, req.body);
    res
      .status(200)
      .json({ message: "Cuisine Restaurant Updated", data: cuisineRestaurant });
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
    const cuisineRestaurant = await deleteCuisineRestaurant(id);

    if (!cuisineRestaurant) {
      return res.status(404).json({ message: "Cuisine Restaurant Not Found" });
    }
    res
      .status(200)
      .json({ message: "Cuisine Restaurant Deleted", data: cuisineRestaurant });
  } catch (error) {
    next(error);
  }
};
