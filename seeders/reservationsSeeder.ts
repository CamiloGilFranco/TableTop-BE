import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";
import { connect } from "http2";

const prisma = new PrismaClient();

const seedReservation = async (prisma: PrismaClient): Promise<void> => {
  const restaurantVenues = await prisma.restaurant_venues.findMany();
  const users = await prisma.users.findMany();
  const usersList = Object.values(users);

  for (const venue of restaurantVenues) {
    const numberOfReservations = random(0, 30);

    for (let i = 0; i < numberOfReservations; i++) {
      await prisma.reservations.create({
        data: {
          date_hour: faker.date.soon(15),
          restaurants: {
            connect: {
              id_restaurant: venue.restaurantsId_restaurant,
            },
          },
          restaurant_venues: {
            connect: {
              id_restaurant_venue: venue.id_restaurant_venue,
            },
          },
          users: {
            connect: {
              user_id: usersList[random(0, usersList.length - 1)].user_id,
            },
          },
        },
      });
    }
  }

  console.log("reservations created!");
};

export default seedReservation;
