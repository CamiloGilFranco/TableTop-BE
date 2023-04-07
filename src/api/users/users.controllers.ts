import { Request, Response, NextFunction } from "express";
import { 
  createUser,
  deleteUser,
  getAllUsers, 
  getUserById,
  updateUser,

 } from "./users.services";

 // gets all the users from the bd
 export const getAllUsersController = async (
  req: Request,
  res: Response,
 ) => {
  try {
    const users = await getAllUsers();
    res.status(200).send({ message: 'Users retrieved successfully', data: users });
  } catch (error: any) {
    res.status(500).json({message: error.message});
  }
 }

 // get single user with id
 export const getUserByIdController = async (
  req: Request,
  res: Response,
 ) =>{
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User with that ID does not exist' });
    }
    
    res.status(200).json({ message: 'User found!', data: user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
 }

 // create new user
 export const createUserController = async (
  req: Request,
  res: Response,
 ) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send({message : 'User created successfully', data: user});
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
 }

 // update user
 export const updateUserController = async (
  req: Request,
  res: Response,
 ) => {
  try {
    const { id } = req.params;
    const user = await updateUser(id, req.body);
    res.status(200).json({ message: 'User updated', data: user });
  } catch (error: any) {
    res.status(500).json({message: error.message});
  }
 }

 // delete user
 export const deleteUserController = async (
  req: Request,
  res: Response,
 ) => {
  try {
    const { id } = req.params;
    const user = await deleteUser(id);
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
 }