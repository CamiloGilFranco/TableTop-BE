import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

export type DecodedToken = {
  id: string;
};

const prisma = new PrismaClient();
const SECRET = process.env.SECRET_KEY as string;
const tokenExpirationTime = 60 * 15;

export const login = (email: string) => {
  return prisma.users.findUnique({
    where: {
      email,
    },
  });
};

export const signToken = (payload: any): string => {
  const token = jwt.sign(payload, SECRET, { expiresIn: tokenExpirationTime });
  return token;
};

export const verifyToken = (token: string): DecodedToken | false => {
  try {
    const decoded = jwt.verify(token, SECRET) as DecodedToken;
    return decoded;
  } catch (error: any) {
    return false;
  }
};
