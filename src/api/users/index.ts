import { Router } from "express";
import {
  deleteUserController,
  getAllUsersController,
  getUserByTokenController,
  updateUserController,
  getUserAddressesController,
} from "./users.controllers";
import { auth } from "../../middleware/auth";

const router = Router();

router.get("/", getAllUsersController);
router.get("/profile", auth, getUserByTokenController);
router.put("/", auth, updateUserController);
router.get("/payment", auth, getUserAddressesController);
router.delete("/:id", auth, deleteUserController);

export default router;
