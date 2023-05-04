import { Router } from "express";
import {
  createFacilityController,
  deleteFacilityController,
  getAllFacilitiesController,
  getByIdFacilityController,
  updateByIdFacilityController,
} from "./facilities.controller";
import { auth } from "../../middleware/auth";
import { checkUserActive } from "../../middleware/checkUserActive";

const router = Router();

router.get("/", getAllFacilitiesController);
router.get("/:id", getByIdFacilityController);
router.post("/", createFacilityController);
router.put("/:id", updateByIdFacilityController);
router.patch("/:id", auth, checkUserActive, deleteFacilityController);

export default router;
