import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SECRET = process.env.SECRET_KEY as string;

export const login = (email: string) => {
  return prisma.users.findUnique({
    where: {
      email: email
    }
  });
}

export const signToken = (payload: any): string => {
  const token = jwt.sign(
    payload,
    SECRET,
    { expiresIn: 60 * 15 }
  );
  return token;
}

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
  } catch (error: any) {
    return false;
  }
}