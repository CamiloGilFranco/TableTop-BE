import { Router } from "express";
import {
  createReviewController,
  deleteReviewController,
  getAllReviewsRestaurantController,
  getReviewByIdController,
  updateReviewController,
  getNumberOfReviewsController,
} from "./reviews.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.get("/count", getNumberOfReviewsController);
router.get("/", auth, getAllReviewsRestaurantController);
router.get("/:id", getReviewByIdController);
router.post("/", auth, createReviewController);
router.put("/:id", updateReviewController);
router.delete("/:id", deleteReviewController);

export default router;
