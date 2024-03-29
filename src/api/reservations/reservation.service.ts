import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllReservations = () => {
  return prisma.reservations.findMany({
    where: {
      active: true
    }
  });
};

export const getByIdReservation = (id: string) => {
  return prisma.reservations.findUnique({
    where: {
      id_reservation: id,
    },
  });
};

export const createReservation = (input: any) => {
  return prisma.reservations.create({
    data: {
      date_hour: input.date,
      restaurantsId_restaurant: input.id_restaurant,
      restaurant_venuesId_restaurant_venue: input.id_venue,
      usersUser_id: input.user,
    },
  });
};

export const updateByIdReservation = (id: string, input: any) => {
  const {
    date_hour,
    restaurantsId_restaurant,
    restaurant_venuesId_restaurant_venue,
    usersUser_id,
    active
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
      active
    },
  });
};

export const deleteReservation = (id: string) => {
  return prisma.reservations.update({
    where: {
      id_reservation: id,
    },
    data: {
      active: false,
    },
  });
};

export const getReservationsByVenue = (venueId: string) => {
  return prisma.reservations.findMany({
    where: {
      restaurant_venuesId_restaurant_venue: venueId
    },
    include: {
      users: true
    },
  });
};