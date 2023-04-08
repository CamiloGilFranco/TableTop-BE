import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllDishes = () => {
  return prisma.dishes.findMany();
};

export const createDish = (input: any) => {
  return prisma.dishes.create({
    data: {
      title: input.title,
      description: input.description,
      price: input.price,
      restaurantsId_restaurant: input.restaurantsId_restaurant,
      dishes_categoriesId_dishes_category:
        input.dishes_categoriesId_dishes_category,
      order_details: input.order_details,
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
  return prisma.dishes.update({
    where: {
      id_dish: id,
    },
    data: {
      title: input.title,
      description: input.description,
      price: input.price, //ó parceInt
      restaurantsId_restaurant: input.restaurantsId_restaurant,
      dishes_categoriesId_dishes_category:
        input.dishes_categoriesId_dishes_category,
      order_details: input.order_details,
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
