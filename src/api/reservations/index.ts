import { Router } from "express";
import {
  createReservationController,
  deleteReservationController,
  getAllReservationsController,
  getByIdReservationController,
  updateByIdReservationController,
} from "./reservation.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.get("/", getAllReservationsController);
router.get("/:id", getByIdReservationController);
router.post("/", auth, createReservationController);
router.put("/:id", updateByIdReservationController);
router.delete("/:id", deleteReservationController);

export default router;
