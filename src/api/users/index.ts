import { Router  } from 'express';
import {
  deleteUserController,
  getAllUsersController,
  getUserByTokenController,
  updateUserController,
  updateUserRoleController,
 } from './users.controllers';
import { auth } from '../../middleware/auth';
import { isAppAdmin } from '../../middleware/isAppAdmin';

const router = Router();

router.get('/', getAllUsersController);
router.get('/profile', auth, getUserByTokenController);
router.put('/', auth, updateUserController);
router.put('/change-role', auth, isAppAdmin, updateUserRoleController);
router.delete('/:id', auth, deleteUserController);

export default router;