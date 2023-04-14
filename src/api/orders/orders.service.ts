import { PrismaClient } from "@prisma/client";

type Input = {
  price: number;
  usersUser_id: string;
};
const prisma = new PrismaClient();

export const getAllorders = () => {
  return prisma.orders.findMany();
};

export const getOrderById = (id: string) => {
  return prisma.orders.findUnique({
    where: {
      id_order: id,
    },
  });
};

export const createOrder = (input: Input) => {
  const { price, usersUser_id } = input;
  return prisma.orders.create({
    data: {
      price,
      usersUser_id,
    },
  });
};

export const updateOrderById = (id: string, input: Input) => {
  const { price, usersUser_id } = input;
  return prisma.orders.update({
    where: {
      id_order: id,
    },
    data: {
      price,
      usersUser_id,
    },
  });
};

export const deleteOrder = (id: string) => {
  return prisma.orders.delete({
    where: {
      id_order: id,
    },
  });
};
