import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//get all
export const getAllRestaurantVenues = () => {
  return prisma.restaurant_venues.findMany();
};
//get by Id
export const getByIdRestaurantVenues = (id: string) => {
  return prisma.restaurant_venues.findUnique({
    where: {
      id_restaurant_venue: id,
    },
  });
};
//create
export const createRestaurantVenues = (input: any) => {
  const {
    name_venue,
    address,
    city,
    venue_photo,
    phone_number,
    open_hour,
    close_hour,
    restaurantsId_restaurant,
  } = input;
  return prisma.restaurant_venues.create({
    data: {
      name_venue,
      address,
      city,
      venue_photo,
      phone_number,
      open_hour,
      close_hour,
      restaurantsId_restaurant,
    },
  });
};
//update
export const updateByIdRestaurantVenues = (id: string, input: any) => {
  const {
    name_venue,
    address,
    city,
    venue_photo,
    phone_number,
    open_hour,
    close_hour,
    restaurantsId_restaurant,
  } = input;
  return prisma.restaurant_venues.update({
    where: {
      id_restaurant_venue: id,
    },
    data: {
      name_venue,
      address,
      city,
      venue_photo,
      phone_number,
      open_hour,
      close_hour,
      restaurantsId_restaurant,
    },
  });
};

//delete
export const deleteRestaurantVenues = (id: string) => {
  return prisma.restaurant_venues.delete({
    where: {
      id_restaurant_venue: id,
    },
  });
};
