import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUserAddresses = () => {
  return prisma.user_addresses.findMany();
};

export const getUserAddressById = (id: string) => {
  return prisma.user_addresses.findUnique({
    where: {
      id_address: id,
    },
  });
};

export const createUserAddress = (input: any) => {
  const { address_name, address, city, usersUser_id } = input;
  return prisma.user_addresses.create({
    data: {
      address_name,
      address,
      city,
      usersUser_id,
    },
  });
};

export const updateUserAddress = (id: string, input: any) => {
  const { address_name, address, city, usersUser_id } = input;
  return prisma.user_addresses.update({
    where: {
      id_address: id,
    },
    data: {
      address_name,
      address,
      city,
      usersUser_id,
    },
  });
};
export const deleteUserAddress = (id: string) => {
  return prisma.user_addresses.delete({
    where: {
      id_address: id,
    },
  });
};
