import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPhotosRestaurant = () => {
  return prisma.restaurant_photos.findMany();
};

export const getPhotosRestaurantById = (id: string) => {
  return prisma.restaurant_photos.findUnique({
    where: {
      id_restaurant_photo: id,
    },
  });
};

export const createPhotosRestaurant = (input: any) => {
  return prisma.restaurant_photos.create({
    data: {
      photo_link: input.photo_link,
      restaurantsId_restaurant: input.restaurantsId_restaurant,
    },
  });
};

export const updatePhotosRestaurant = (id: string, input: any) => {
  return prisma.restaurant_photos.update({
    where: {
      id_restaurant_photo: id,
    },
    data: {
      photo_link: input.photo_link,
      restaurantsId_restaurant: input.restaurantsId_restaurant,
    },
  });
};
export const deleteCuisineRestaurant = (id: string) => {
  return prisma.restaurant_photos.delete({
    where: {
      id_restaurant_photo: id,
    },
  });
};
