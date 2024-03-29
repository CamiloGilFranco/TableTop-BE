import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCuisineCategory = () => {
  return prisma.cuisine_categories.findMany();
};

export const getCuisineCategoryById = (id: string) => {
  return prisma.cuisine_categories.findUnique({
    where: {
      id_cuisine_category: id,
    },
  });
};

export const createCuisineCategory = (input: any) => {
  return prisma.cuisine_categories.create({
    data: {
      cuisine_category: input.cuisine_category,
      cuisine_photo: input.cuisine_photo,
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
      cuisine_photo: input.cuisine_photo,
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
