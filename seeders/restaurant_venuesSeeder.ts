import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedRestaurant_venues = async (prisma: PrismaClient): Promise<void> => {
  const restaurants = await prisma.restaurants.findMany();

  const cities = [
    "Bogotá",
    "Medellin",
    "Cartagena",
    "Barranquilla",
    "Bucaramanga",
    "Cali",
    "Villavicencio",
    "Tunja",
  ];
  const prefixAddress = ["CLL", "CRA", "DG", "TR"];

  for (const restaurant of restaurants) {
    const numberOfVenues = random(1, 10);

    for (let i = 0; i < numberOfVenues; i++) {
      await prisma.restaurant_venues.create({
        data: {
          name_venue: faker.lorem.word(),
          address: `${prefixAddress[random(0, 3)]} ${random(1, 170)} # ${random(
            1,
            150
          )} - ${random(1, 5)}`,
          city: cities[random(0, cities.length - 1)],
          venue_photo: `https://raw.githubusercontent.com/CamiloGilFranco/TableTop-FE/main/src/assets/gallery/${random(
            1,
            40
          )}.jpg`,
          phone_number: faker.phone.number("###-###-####"),
          open_hour: `${random(8, 11)} AM`,
          close_hour: `${random(8, 11)} PM`,
          restaurants: {
            connect: {
              id_restaurant: restaurant.id_restaurant,
            },
          },
        },
      });
    }
  }

  console.log("restaurant_venues created!");
};

export default seedRestaurant_venues;
