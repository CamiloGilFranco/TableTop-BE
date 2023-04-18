import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { createUser } from "../../api/users/users.services";
import {
  login,
  signToken
} from "../auth.services";

const prisma = new PrismaClient();

// create new user
export const signupController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      email,
      name,
      last_name,
      address,
      phone_number
    } = req.body;
    const existingUser = await prisma.users.findUnique({ where: { email } });

    if (existingUser) {
      res.status(409).json({ message: 'Email already exists' });
      return;
    }
    const encPassword = await bcrypt.hash(req.body.password, 10);
    const {user_id: id} = await createUser({ ...req.body, password: encPassword });
    const token = signToken({ id });
    res.status(201).send({message : 'User created successfully', data: { name, last_name, email }, token});
  } catch (error: any) {
    console.error('Error:', error.message);

    if (error.message === 'Email already exists') {
      res.status(409).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  }
}

// log in for existing user
export const loginController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email, password } = req.body;
    const user = await login(email);

    if (!user) {
      throw new Error('Email or password are incorrect');
    }
    const isValid: boolean = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      throw new Error('Email or password are incorrect');
    }

    const { name, last_name, user_id: id, user_role } = user;
    const token = signToken({ id });
    res.setHeader('Authorization', `Bearer ${token}`);
    res.status(201).send({message : 'User loged in successfully',  data: { email, name, last_name, user_role }, token});

  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
}