import { Router } from "express";
import {
  createReservationController,
  deleteReservationController,
  getAllReservationsController,
  getByIdReservationController,
  getReservationsByVenueController,
  updateByIdReservationController,
} from "./reservation.controller";
import { auth } from "../../middleware/auth";
import { isRestaurantAdmin } from "../../middleware/isRestaurantAdmin";

const router = Router();

router.get("/", getAllReservationsController);
router.get("/:id", getByIdReservationController);
router.post("/", createReservationController);
router.put("/:id", auth, isRestaurantAdmin, updateByIdReservationController);
router.delete("/:id", deleteReservationController);
router.get("/venue/:venueId", getReservationsByVenueController);

export default router;
