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
  const { photo_link, restaurant_id } = input;
  return prisma.restaurant_photos.create({
    data: {
      photo_link,
      restaurantsId_restaurant: restaurant_id,
    },
  });
};


export const updatePhotosRestaurant = (id: string, input: any) => {
  const { photo_link, restaurantsId_restaurant } = input;
  return prisma.restaurant_photos.update({
    where: {
      id_restaurant_photo: id,
    },
    data: {
      photo_link,
      restaurantsId_restaurant,
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
