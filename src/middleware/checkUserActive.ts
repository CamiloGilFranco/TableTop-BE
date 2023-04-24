import { Response, NextFunction } from 'express';
import { getUserById } from '../api/users/users.services'; 
import { AuthUser } from '../auth/auth.types';

export const checkUserActive = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  const userId = req.user;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' });
  }

  try {
    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (!user.active) {
      return res.status(403).json({ message: 'User is not active' });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
