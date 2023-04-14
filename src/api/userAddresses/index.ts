import { Router } from "express";
import {
  createUserAddresController,
  deleteUserAddressController,
  getAllUserAddressesController,
  getUserAddressByIdController,
  updateUserAddressController,
} from "./userAddreses.controller";

const router = Router();

router.get("/", getAllUserAddressesController);
router.get("/:id", getUserAddressByIdController);
router.post("/", createUserAddresController);
router.put("/:id", updateUserAddressController);
router.delete("/:id", deleteUserAddressController);

export default router;
