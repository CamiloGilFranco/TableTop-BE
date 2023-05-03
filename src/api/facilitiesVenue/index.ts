import { Router } from "express";
import {
  createFacilityVenueController,
  deleteFacilityVenueController,
  getAllFacilitiesVenueController,
  getFacilityVenueByIdController,
  updateFacilityVenueController,
} from "./facilitiesVenue.controller";
import { auth } from "../../middleware/auth";
import { checkUserActive } from "../../middleware/checkUserActive";

const router = Router();

router.get("/", getAllFacilitiesVenueController);
router.get("/:id", getFacilityVenueByIdController);
router.post("/", auth, checkUserActive, createFacilityVenueController);
router.put("/:id", updateFacilityVenueController);
router.delete("/:id", deleteFacilityVenueController);

export default router;
