import { Request, Response, NextFunction } from "express";
import {
  createCuisineCategory,
  deleteCuisineCategory,
  getAllCuisineCategory,
  getCuisineCategoryById,
  updateCuisineCategoryById,
} from "./cuisineCategories.service";

export const getAllCuisineCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cuisineCategories = await getAllCuisineCategory();
    res
      .status(200)
      .json({ message: "Coisine categories found!", data: cuisineCategories });
  } catch (error) {
    next(error);
  }
};

export const getCuisineCategoryByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const cuisineCategoriId = await getCuisineCategoryById(id);

    if (!cuisineCategoriId) {
      return res.status(404).json({ message: "Category don't exist" });
    }
    res
      .status(200)
      .json({ message: "Category found", data: cuisineCategoriId });
  } catch (error) {
    next(error);
  }
};

export const createCuisineCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //validacion para que no cree una categoria ya existente
    const { cuisine_category } = req.body;
    const allCategories = await getAllCuisineCategory();
    const categoryFilter = allCategories.some(
      (e) => e.cuisine_category === cuisine_category
    );
    if (categoryFilter) {
      return res.status(400).json({ message: "existing category" });
    } else {
      const cuisineCategory = await createCuisineCategory(req.body);
      res
        .status(201)
        .json({ message: "Cuisine Category created", data: cuisineCategory });
    }
  } catch (error) {
    next(error);
  }
};

export const updateCuisineCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const categoryId = await getCuisineCategoryById(id);
    if (!categoryId) {
      return res.status(404).json({ message: "Category not found" });
    }
    const cuisineCategory = await updateCuisineCategoryById(id, req.body);
    res
      .status(200)
      .json({ message: "Cuisine Category Updated", data: cuisineCategory });
  } catch (error) {
    next(error);
  }
};

export const deleteCuisineCategoryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const cuisineCategory = await deleteCuisineCategory(id);

    if (!cuisineCategory) {
      return res.status(404).json({ message: "Category Not Found" });
    }
    res
      .status(200)
      .json({ message: "Category deleted", data: cuisineCategory });
  } catch (error) {
    next(error);
  }
};
