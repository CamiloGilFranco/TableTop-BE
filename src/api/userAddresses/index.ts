import { Router } from "express";
import {
  createUserAddresController,
  deleteUserAddressController,
  getAllUserAddressesController,
  getUserAddressByIdController,
  updateUserAddressController,
} from "./userAddreses.controller";
import { auth } from "../../middleware/auth";

const router = Router();

router.get("/", getAllUserAddressesController);
router.get("/:id", getUserAddressByIdController);
router.post("/", auth, createUserAddresController);
router.put("/:id", updateUserAddressController);
router.delete("/:id", deleteUserAddressController);

export default router;
