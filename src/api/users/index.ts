import { Router } from "express";
import {
  deactivateUserController,
  getAllUsersController,
  getUserByTokenController,
  getUsersByRoleController,
  updateUserController,
  updateUserRoleController,
  getUserAddressesController,
  deleteUserController,
} from "./users.controllers";
import { auth } from "../../middleware/auth";
import { isAppAdmin } from '../../middleware/isAppAdmin';
import { checkUserActive } from '../../middleware/checkUserActive';

const router = Router();

router.get("/", getAllUsersController);
router.get("/profile", auth, checkUserActive, getUserByTokenController);
router.put("/", auth, checkUserActive, updateUserController);
router.put('/change-role', auth, checkUserActive, isAppAdmin, updateUserRoleController);
router.put("/:id", auth, checkUserActive, isAppAdmin, deactivateUserController);
router.get('/by-role', auth, checkUserActive, isAppAdmin, getUsersByRoleController);
router.get("/profile", auth, getUserByTokenController);
router.put("/", auth, updateUserController);
router.get("/payment", auth, getUserAddressesController);
router.delete("/:id", auth, deleteUserController);


export default router;
