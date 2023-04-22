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
    id_restaurant,
    id_dishes_category,
    order_details,
  } = input;

  console.log("Input:", input);
  console.log("id_restaurant:", id_restaurant);

  return prisma.dishes.create({
    data: {
      title,
      description,
      price,
      order_details,
      restaurants: {
        connect: {
          id_restaurant: id_restaurant,
        },
      },
      dishes_categories: {
        connect: {
          id_dishes_category, // Use the provided id_dishes_category
        },
      },
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
