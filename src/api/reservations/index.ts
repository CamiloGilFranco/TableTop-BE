import { Router } from "express";
import {
  createReservationController,
  deleteReservationController,
  getAllReservationsController,
  getByIdReservationController,
  getReservationsByVenueController,
  updateByIdReservationController,
} from "./reservation.controller";

const router = Router();

router.get("/", getAllReservationsController);
router.get("/:id", getByIdReservationController);
router.post("/", createReservationController);
router.put("/:id", updateByIdReservationController);
router.delete("/:id", deleteReservationController);
router.get("/venue/:venueId", getReservationsByVenueController);

export default router;
