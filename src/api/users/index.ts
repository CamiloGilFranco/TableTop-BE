import { Router  } from 'express';
import { 
  createUserController,
  deleteUserController,
  getAllUsersController, 
  getUserByIdController,
  updateUserController,
 } from './users.controllers';

const router = Router();

router.get('/', getAllUsersController);
router.get('/:id', getUserByIdController);
router.post('/', createUserController);
router.put('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;