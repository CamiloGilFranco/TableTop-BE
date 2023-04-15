import { Request, Response, NextFunction } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
} from "./reviews.service";

export const getAllReviewsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await getAllReviews();
    res.status(200).json({
      message: "Reviews found!",
      data: reviews,
    });
  } catch (error) {
    next(error);
  }
};

export const getReviewByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const review = await getReviewById(id);

    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }
    res.status(200).json({ message: "Review found", data: review });
  } catch (error) {
    next(error);
  }
};

export const createReviewController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const review = await createReview(req.body);
    res.status(201).json({ message: "Review created", data: review });
  } catch (error) {
    next(error);
  }
};

export const updateReviewController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const review = await updateReview(id, req.body);
    res.status(201).json({ message: "Review updated", data: review });
  } catch (error) {
    next(error);
  }
};

export const deleteReviewController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const review = await deleteReview(id);
    res.status(200).json({ message: "Review deleted", data: review });
  } catch (error) {
    next(error);
  }
};
