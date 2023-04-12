import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//get all
export const getAllFacilities = () => {
  return prisma.facilities.findMany();
};
//get by Id
export const getByIdFacility = (id: string) => {
  return prisma.facilities.findUnique({
    where: {
      id_facility: id,
    },
  });
};
//create
export const createFacility = (input: any) => {
  return prisma.facilities.create({
    data: {
      facility_name: input.cuisine_category,
    },
  });
};
//update
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
//delete
export const deleteFacility = (id: string) => {
  return prisma.facilities.delete({
    where: {
      id_facility: id,
    },
  });
};
