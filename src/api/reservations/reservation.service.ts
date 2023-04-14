import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllReservations = () => {
  return prisma.reservations.findMany();
};

export const getByIdReservation = (id: string) => {
  return prisma.reservations.findUnique({
    where: {
      id_reservation: id,
    },
  });
};

export const createReservation = (input: any) => {
  const {
    date_hour,
    restaurantsId_restaurant,
    restaurant_venuesId_restaurant_venue,
    usersUser_id,
  } = input;
  return prisma.reservations.create({
    data: {
      date_hour,
      restaurantsId_restaurant,
      restaurant_venuesId_restaurant_venue,
      usersUser_id,
    },
  });
};

export const updateByIdReservation = (id: string, input: any) => {
  const {
    date_hour,
    restaurantsId_restaurant,
    restaurant_venuesId_restaurant_venue,
    usersUser_id,
  } = input;
  return prisma.reservations.update({
    where: {
      id_reservation: id,
    },
    data: {
      date_hour,
      restaurantsId_restaurant,
      restaurant_venuesId_restaurant_venue,
      usersUser_id,
    },
  });
};

export const deleteReservation = (id: string) => {
  return prisma.reservations.delete({
    where: {
      id_reservation: id,
    },
  });
};
