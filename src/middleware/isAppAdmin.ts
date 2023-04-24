import { NextFunction, Response } from "express";
import { AuthUser } from "../auth/auth.types";
import { getUserById } from "../api/users/users.services";
import { APP_ADMIN_ROLE } from "../../constants/roles";

export const isAppAdmin = async (
  req: AuthUser,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      return res.status(403).json({ message: "Access denied" });
    }

    const user = await getUserById(req.user);
    if (user && user.user_role === APP_ADMIN_ROLE) {
      next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
