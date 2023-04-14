import { Request, Response, NextFunction } from "express";
import {
  createDishesCategory,
  deleteDishesCategory,
  getAllDishesCategories,
  getByIdDishesCategory,
  updateByIdDishesCategory,
} from "./dishesCategories.service";

//get all
export const getAllDishesCategoriesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dishesCategories = await getAllDishesCategories();
    res
      .status(200)
      .json({ message: "Dishes Categories Found!", data: dishesCategories });
  } catch (error) {
    next(error);
  }
};

//get by id
export const getByIdDishesCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const dishesCategory = await getByIdDishesCategory(id);
    if (!dishesCategory) {
      return res.status(404).json({ message: "Dishes Category Not Found!" });
    }
    res
      .status(200)
      .json({ message: "Dishes Category Found!", data: dishesCategory });
  } catch (error) {
    next(error);
  }
};

//create
export const createDishesCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dishesCategory = await createDishesCategory(req.body);
    res
      .status(201)
      .json({ message: "Disches Category created!", data: dishesCategory });
  } catch (error) {
    next(error);
  }
};

//update
export const updateByIdDishesCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const dishesCategory = await updateByIdDishesCategory(id, req.body);
    res
      .status(200)
      .json({ message: "Dishes Category updated", data: dishesCategory });
  } catch (error) {
    next(error);
  }
};
//delete
export const deleteDishesCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const dishesCategory = await deleteDishesCategory(id);
    res
      .status(200)
      .json({ message: "Dishes Category Deleted", data: dishesCategory });
  } catch (error) {
    next(error);
  }
};
