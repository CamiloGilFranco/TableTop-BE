import { PrismaClient } from "@prisma/client";

type Input = {
  phone_number: string;
  usersUser_id: string;
};

const prisma = new PrismaClient();

export const getAllUserPhoneNumbres = () => {
  return prisma.user_phone_numbers.findMany();
};

export const getByIdUserPhoneNumber = (id: string) => {
  return prisma.user_phone_numbers.findUnique({
    where: {
      id_user_phone_number: id,
    },
  });
};

export const createUserPhoneNumber = (input: Input) => {
  const { phone_number, usersUser_id } = input;
  return prisma.user_phone_numbers.create({
    data: {
      phone_number,
      usersUser_id,
    },
  });
};

export const updateByIdUserPhoneNumber = (id: string, input: Input) => {
  const { phone_number, usersUser_id } = input;
  return prisma.user_phone_numbers.update({
    where: {
      id_user_phone_number: id,
    },
    data: {
      phone_number,
      usersUser_id,
    },
  });
};

export const deleteUserPhoneNumber = (id: string) => {
  return prisma.user_phone_numbers.delete({
    where: {
      id_user_phone_number: id,
    },
  });
};
