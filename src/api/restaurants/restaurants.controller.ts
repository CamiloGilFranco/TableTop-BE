import { Request, Response, NextFunction } from "express";

import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurantById,
  getAllRestaurants,
  updateRestaurant,
  getAllRestaurantsWithCuisines,
  getRestaurantByPath,
} from "./restaurants.services";

// get all restaurants
export const getAllRestaurantsController = async (
  req: Request,
  res: Response
) => {
  try {
    const restaurants = await getAllRestaurants();
    res.status(200).json({
      message: "Restaurants retrieved successfully",
      data: restaurants,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// get restaurant by id
export const getAllRestaurantByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const restaurant = await getAllRestaurantById(id);
    res
      .status(200)
      .json({ message: "Restaurant with that ID found!", data: restaurant });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//Get restaurants for RestaurantList
export const getAllRestaurantsWithCuisinesController = async (
  req: Request,
  res: Response
) => {
  try {
    const restaurants = await getAllRestaurantsWithCuisines();
    res.status(200).json({
      message: "Restaurants retrieved successfully",
      data: restaurants,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// get restaurant by path
export const getRestaurantByPathController = async (
  req: Request,
  res: Response
) => {
  try {
    const { path } = req.params;
    const restaurant = await getRestaurantByPath(path);
    res
      .status(200)
      .json({ message: "Restaurant with that path found!", data: restaurant });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// create new restaurant
export const createRestaurantController = async (
  req: Request,
  res: Response
) => {
  try {
    const restaurant = await createRestaurant(req.body);
    res
      .status(200)
      .json({ message: "Restaurant created successfully", data: restaurant });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//update restaurant
export const updateRestaurantController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const restaurant = await updateRestaurant(id, req.body);
    res.status(200).json({ message: "Restaurant updated", data: restaurant });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// delete restaurant
export const deleteRestaurantController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const restaurant = await deleteRestaurant(id);
    res.status(200).json({ message: "Restaurant Deleted", data: restaurant });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
