import { NextFunction, Response } from "express";
import { AuthUser } from "../auth/auth.types";
import { getUserById } from "../api/users/users.services";

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
    if (user && user.user_role === "appAdmin") {
      next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
