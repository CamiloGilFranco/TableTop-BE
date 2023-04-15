import { Router } from "express";
import {
  createFacilityVenueController,
  deleteFacilityVenueController,
  getAllFacilitiesVenueController,
  getFacilityVenueByIdController,
  updateFacilityVenueController,
} from "./facilitiesVenue.controller";

const router = Router();

router.get("/", getAllFacilitiesVenueController);
router.get("/:id", getFacilityVenueByIdController);
router.post("/", createFacilityVenueController);
router.put("/:id", updateFacilityVenueController);
router.delete("/:id", deleteFacilityVenueController);

export default router;
