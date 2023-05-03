import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCuisineRestaurant = () => {
  return prisma.cuisines_per_restaurant.findMany();
};

export const getCuisineRestaurantById = (id: string) => {
  return prisma.cuisines_per_restaurant.findUnique({
    where: {
      id_cuisine_per_restaurant: id,
    },
  });
};
export const createCuisineRestaurant = async (input: any) => {
  const { restaurantsId_restaurant, cuisine_categoriesId_cuisine_category } =
    input;

  const existingCuisine = await prisma.cuisines_per_restaurant.findMany({
    where: {
      restaurantsId_restaurant,
      cuisine_category: cuisine_categoriesId_cuisine_category,
    },
  });
  if (existingCuisine) {
    throw new Error("Cuisine already exists for this restaurant.");
  }

  return prisma.cuisines_per_restaurant.create({
    data: {
      restaurantsId_restaurant,
      cuisine_category: cuisine_categoriesId_cuisine_category,
    },
  });
};

export const updateCuisineRestaurant = (id: string, input: any) => {
  const { restaurantsId_restaurant, cuisine_categoriesId_cuisine_category } =
    input;

  return prisma.cuisines_per_restaurant.update({
    where: {
      id_cuisine_per_restaurant: id,
    },
    data: {
      restaurantsId_restaurant,
      cuisine_categoriesId_cuisine_category,
    },
  });
};

export const deleteCuisineRestaurant = (id: string) => {
  return prisma.cuisines_per_restaurant.delete({
    where: {
      id_cuisine_per_restaurant: id,
    },
  });
};
