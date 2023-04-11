import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllDishes = () => {
  return prisma.dishes.findMany();
};

export const createDish = (input: any) => {
  const {
    title,
    description,
    price,
    restaurantsId_restaurant,
    dishes_categoriesId_dishes_category,
    order_details,
  } = input;
  return prisma.dishes.create({
    data: {
      title,
      description,
      price,
      restaurantsId_restaurant,
      dishes_categoriesId_dishes_category,
      order_details,
    },
  });
};

export const getDishById = (id: string) => {
  return prisma.dishes.findUnique({
    where: {
      id_dish: id,
    },
  });
};

export const updateDishById = (id: string, input: any) => {
  const {
    title,
    description,
    price,
    restaurantsId_restaurant,
    dishes_categoriesId_dishes_category,
    order_details,
  } = input;
  return prisma.dishes.update({
    where: {
      id_dish: id,
    },
    data: {
      title,
      description,
      price,
      restaurantsId_restaurant,
      dishes_categoriesId_dishes_category,
      order_details,
    },
  });
};

export const deleteDishById = (id: string) => {
  return prisma.dishes.delete({
    where: {
      id_dish: id,
    },
  });
};
