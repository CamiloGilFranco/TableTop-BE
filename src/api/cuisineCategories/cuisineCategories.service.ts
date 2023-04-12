import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//get all
export const getAllCuisineCategory = () => {
  return prisma.cuisine_categories.findMany();
};
//get by Id
export const getCuisineCategoryById = (id: string) => {
  return prisma.cuisine_categories.findUnique({
    where: {
      id_cuisine_category: id,
    },
  });
};
//create -> post
export const createCuisineCategory = (input: any) => {
  return prisma.cuisine_categories.create({
    data: {
      cuisine_category: input.cuisine_category,
    },
  });
};

export const updateCuisineCategoryById = (id: string, input: any) => {
  return prisma.cuisine_categories.update({
    where: {
      id_cuisine_category: id,
    },
    data: {
      cuisine_category: input.cuisine_category,
    },
  });
};

export const deleteCuisineCategory = (id: string) => {
  return prisma.cuisine_categories.delete({
    where: {
      id_cuisine_category: id,
    },
  });
};
