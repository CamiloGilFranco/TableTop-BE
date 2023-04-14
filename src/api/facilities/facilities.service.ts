import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllFacilities = () => {
  return prisma.facilities.findMany();
};

export const getByIdFacility = (id: string) => {
  return prisma.facilities.findUnique({
    where: {
      id_facility: id,
    },
  });
};

export const createFacility = (input: any) => {
  return prisma.facilities.create({
    data: {
      facility_name: input.cuisine_category,
    },
  });
};

export const updateByIdFacility = (id: string, input: any) => {
  return prisma.facilities.update({
    where: {
      id_facility: id,
    },
    data: {
      facility_name: input.facility_name,
    },
  });
};

export const deleteFacility = (id: string) => {
  return prisma.facilities.delete({
    where: {
      id_facility: id,
    },
  });
};
