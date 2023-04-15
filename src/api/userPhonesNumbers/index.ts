import { Router } from "express";
import {
  createUserPhoneNumberController,
  deleteUserPhoneNumberController,
  getAllUserPhoneNumbresController,
  getByIdUserPhoneNumberController,
  updateByIdUserPhoneNumberController,
} from "./userPhonesNumbers.controller";

const router = Router();

router.get("/", getAllUserPhoneNumbresController);
router.get("/:id", getByIdUserPhoneNumberController);
router.post("/", createUserPhoneNumberController);
router.put("/:id", updateByIdUserPhoneNumberController);
router.delete("/:id", deleteUserPhoneNumberController);

export default router;
