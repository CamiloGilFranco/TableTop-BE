import { Request, Response, NextFunction } from "express";
import {
  createDish,
  deleteDishById,
  getAllDishes,
  getDishById,
  updateDishById,
} from "./dishes.service";

export const getAllDishesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dishes = await getAllDishes();
    res.status(200).json({ message: "Dishes found", data: dishes });
  } catch (error) {
    next(error);
  }
};

export const createDishController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dish = await createDish(req.body);
    res.status(201).json({ message: "dish created", data: dish });
  } catch (error) {
    next(error);
  }
};

export const getDishByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const dish = await getDishById(id);

    if (!dish) {
      return res.status(404).json({ message: "Dish not found" });
    }
    res.status(200).json({ message: "Dish found", data: dish });
  } catch (error) {
    next(error);
  }
};

export const updateDishController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const dish = await updateDishById(id, req.body);

    if (!dish) {
      return res.status(404).json({ message: "Dish not Found" });
    }
    res.status(201).json({ message: "Dish updated", data: dish });
  } catch (error) {
    next(error);
  }
};

export const deleteDishController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const dish = await getDishById(id);
    if (!dish) {
      return res.status(404).json({ message: "Dish Not Found" });
    }
    const dishExist = await deleteDishById(id);
    res.status(200).json({ message: "Dish deleted", data: dishExist });
  } catch (error) {
    next(error);
  }
};
