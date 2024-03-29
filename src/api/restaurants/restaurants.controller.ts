import { Request, Response, NextFunction } from "express";

import {
  createRestaurant,
  deactivateRestaurant,
  getAllRestaurantById,
  getAllRestaurants,
  updateRestaurant,
  getAllRestaurantsWithCuisines,
  getRestaurantByPath,
  updateRestaurantRating,
  getRestaurantByUser,
  addAdminToRestaurant,
} from "./restaurants.services";
import { getUserByEmail, updateUserRole } from "../users/users.services";
import { AuthUser } from "../../auth/auth.types";
import { RESTAURANT_ADMIN_ROLE } from "../../../constants/roles";
import { updateVenueImage } from "../restaurantVenues/restaurantVenues.service";

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
    const { adminEmail } = req.body;

    const existingUser = await getUserByEmail(adminEmail);
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "Admin email does not match any existing user" });
    }

    const { user_id: id } = existingUser;
    req.body.admins = [{ id }];

    // Updates the existing user to have the restaurant admin role.
    await updateUserRole(adminEmail, "restaurantAdmin");

    const restaurant = await createRestaurant(req.body);
    return res
      .status(200)
      .json({ message: "Restaurant created successfully", data: restaurant });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error.message });
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
    console.error("Error in updateRestaurantController:", error);
    res.status(500).json({ message: error.message });
  }
};

// delete restaurant
export const deactivateRestaurantController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const restaurant = await deactivateRestaurant(id);
    res.status(200).json({ message: "Restaurant Deleted", data: restaurant });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//update restaurant rating
export const updateRestaurantRatingController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id_restaurant, rating } = req.body;
    await updateRestaurantRating(id_restaurant, rating);
    res.status(200).json({ message: "Restaurant Rating updated" });
  } catch (error) {
    res.status(500).json({ message: "the record was not updated" });
  }
};

export const getRestaurantByUserController = async (
  req: AuthUser,
  res: Response
) => {
  try {
    const { user_id } = req.params;
    const restaurant = await getRestaurantByUser(user_id);
    res
      .status(200)
      .json({
        message: "Restaurant associated with user found!",
        data: restaurant,
      });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const addAdminToRestaurantController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, restaurantId } = req.body;
    if (!email || !restaurantId) {
      return res
        .status(400)
        .json({ message: "Email and restaurantId are required" });
    }
    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
      return res
        .status(400)
        .json({ message: "Admin email does not match any existing user" });
    }

    await updateUserRole(email, RESTAURANT_ADMIN_ROLE);

    const updatedRestaurant = await addAdminToRestaurant(email, restaurantId);
    return res
      .status(200)
      .json({
        message: "Admin added to the restaurant",
        data: updatedRestaurant,
      });
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};


