import { Request, Response, NextFunction } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
  getAllReviewsRestaurant,
  getNumberOfReviews,
} from "./reviews.service";
import { AuthUser } from "../../auth/auth.types";

export const getAllReviewsRestaurantController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const {
      user,
      query: { id_restaurant },
    } = req;

    const reviews = await getAllReviewsRestaurant(id_restaurant, user);
    res.status(200).json({
      message: "Complete",
      data: reviews,
    });
  } catch (error) {
    res.status(200).json({
      message: "Error",
    });
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
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const {
      user,
      body: { id_restaurant, title, rating, comment },
    } = req;

    const review = await createReview({
      user,
      id_restaurant,
      title,
      rating: parseInt(rating),
      comment,
    });
    res.status(201).json({ message: "Review created", data: review });
  } catch (error) {
    res.status(400).json({ message: "The review could not be created" });
  }
};

export const getNumberOfReviewsController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id_restaurant } = req.query;

    const review = await getNumberOfReviews(id_restaurant);
    res.status(201).json({ message: "Count done", data: review });
  } catch (error) {
    res.status(400).json({ message: "Error" });
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
