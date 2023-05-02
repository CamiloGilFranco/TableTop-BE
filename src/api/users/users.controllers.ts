import { Request, Response } from "express";
import { AuthUser } from "../../auth/auth.types";

import {
  deactivateUser,
  getAllUsers,
  getUserById,
  getUsersByRole,
  updateUser,
  updateUserRole,
  getUserAddresses,
  removeResAdmin,
} from "./users.services";

// gets all the users from the bd
export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res
      .status(200)
      .send({ message: "Users retrieved successfully", data: users });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// get single user with token
export const getUserByTokenController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const { user } = req;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const fetchedUser = await getUserById(user);

    if (!fetchedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User found!", data: fetchedUser });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// get single user with payment info
export const getUserAddressesController = async (
  req: Request & AuthUser,
  res: Response
) => {
  try {
    const { user } = req;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const fetchedUser = await getUserAddresses(user);

    if (!fetchedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User found!", data: fetchedUser });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// update user
export const updateUserController = async (req: AuthUser, res: Response) => {
  try {
    const id = req.user;
    const user = await updateUser(id, req.body);
    res.status(200).json({ message: "User updated", data: user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// updates a user role
export const updateUserRoleController = async (req: Request, res: Response) => {
  try {
    const { email, user_role } = req.body;
    if (!email || !user_role) {
      return res
        .status(400)
        .json({ message: "Email and user_role are required" });
    }
    const user = await updateUserRole(email, user_role);
    res.status(200).json({ message: "User role updated", data: user });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const removeResAdminController = async (req: Request, res: Response) => {
  try {
    const { email, user_role } = req.body;
    console.log("🚀 ~ file: users.controllers.ts:102 ~ removeResAdminController ~ req.body:", req.body)
    console.log("🚀 ~ file: users.controllers.ts:102 ~ removeResAdminController ~ user_role:", user_role)
    console.log("🚀 ~ file: users.controllers.ts:102 ~ removeResAdminController ~ email:", email)
    if (!email || !user_role) {
      return res
        .status(400)
        .json({ message: "Email and user_role are required" });
    }
    const user = await removeResAdmin(email, user_role);
    res.status(200).json({ message: "User role updated", data: user });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const getUsersByRoleController = async (req: Request, res: Response) => {
  try {
    const { role } = req.query;
    if (!role) {
      return res.status(400).json({ message: "Role parameter is required" });
    }
    const users = await getUsersByRole(role as string);
    res
      .status(200)
      .send({ message: "Users retrieved successfully", data: users });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// delete user
export const deactivateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await deactivateUser(id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deactivateSelfController = async (
  req: AuthUser,
  res: Response
) => {
  try {
    const { user: id } = req;
    if (!id) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = await deactivateUser(id);
    res.status(202).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
