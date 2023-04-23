import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//get all
export const getAllDishesCategories = () => {
  return prisma.dishes_categories.findMany({
    where: {
      active: true
    }
  });
};
//get by Id
export const getByIdDishesCategory = (id: string) => {
  return prisma.dishes_categories.findUnique({
    where: {
      id_dishes_category: id,
    },
  });
};
//create
export const createDishesCategory = (input: any) => {
  const { dishes_category, restaurantsId_restaurant } = input;
  return prisma.dishes_categories.create({
    data: {
      dishes_category,
      restaurantsId_restaurant,
    },
  });
};
//update
export const updateByIdDishesCategory = (id: string, input: any) => {
  const { dishes_category, restaurantsId_restaurant } = input;
  return prisma.dishes_categories.update({
    where: {
      id_dishes_category: id,
    },
    data: {
      dishes_category,
      restaurantsId_restaurant,
    },
  });
};
//delete
export const deleteDishesCategory = (id_dishes_category: string) => {
  return prisma.dishes_categories.update({
    where: {
      id_dishes_category,
    },
    data: {
      active: false
    }
  });
};
