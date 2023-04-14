import { Router } from "express";
import {
  createFacilityController,
  deleteFacilityController,
  getAllFacilitiesController,
  getByIdFacilityController,
  updateByIdFacilityController,
} from "./facilities.controller";

const router = Router();

router.get("/", getAllFacilitiesController);
router.get("/:id", getByIdFacilityController);
router.post("/", createFacilityController);
router.put("/:id", updateByIdFacilityController);
router.delete("/:id", deleteFacilityController);

export default router;
