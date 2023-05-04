import { Router } from "express";
import {
  deactivateUserController,
  getAllUsersController,
  getUserByTokenController,
  getUsersByRoleController,
  updateUserController,
  updateUserRoleController,
  getUserAddressesController,
  deactivateSelfController,
  removeResAdminController,
} from "./users.controllers";
import { auth } from "../../middleware/auth";
import { isAppAdmin } from "../../middleware/isAppAdmin";
import { checkUserActive } from "../../middleware/checkUserActive";

const router = Router();

router.get("/", getAllUsersController);
router.get("/profile", auth, getUserByTokenController);
router.put("/", auth, checkUserActive, updateUserController);
router.put(
  "/change-role",
  auth,
  checkUserActive,
  isAppAdmin,
  updateUserRoleController
);
router.patch(
  "/remove-res-admin",
  auth,
  checkUserActive,
  removeResAdminController
);
router.put("/:id", auth, checkUserActive, isAppAdmin, deactivateUserController);
router.get(
  "/by-role",
  auth,
  checkUserActive,
  isAppAdmin,
  getUsersByRoleController
);
router.get("/payment", auth, getUserAddressesController);
router.patch("/deactivateSelf", auth, checkUserActive, deactivateSelfController);

export default router;
