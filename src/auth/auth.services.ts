import { PrismaClient } from "@prisma/client";
import { SECRET } from "../../constants/secret";
import jwt from 'jsonwebtoken';

export type DecodedToken = {
  id: string;
}

const prisma = new PrismaClient();
const secret = SECRET as string;
const tokenExpirationTime = 60 * 60 * 2;

export const login = (email: string) => {
  return prisma.users.findUnique({
    where: {
      email
    }
  });
}

export const signToken = (payload: any): string => {
  const token = jwt.sign(
    payload,
    secret,
    { expiresIn: tokenExpirationTime }
  );
  return token;
}

export const verifyToken = (token: string): DecodedToken | false => {
  try {
    const decoded = jwt.verify(token, SECRET) as DecodedToken;
    return decoded;
  } catch (error: any) {
    return false;
  }
}