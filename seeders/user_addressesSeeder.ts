import { PrismaClient } from "@prisma/client";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedUser_addresses = async (prisma: PrismaClient): Promise<void> => {
  const users = await prisma.users.findMany();

  const addressNames = [
    "Home",
    "Office",
    "Apartment",
    "work",
    "Mom House",
    "Dad House",
    "Couple House",
    "Friend House",
  ];
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

  for (const user of users) {
    const numberOfAddresses = random(1, 5);

    for (let i = 0; i < numberOfAddresses; i++) {
      await prisma.user_addresses.create({
        data: {
          address_name: addressNames[random(0, addressNames.length - 1)],
          address: `${prefixAddress[random(0, 3)]} ${random(1, 170)} # ${random(
            1,
            150
          )} - ${random(1, 5)}`,
          city: cities[random(0, cities.length - 1)],
          users: {
            connect: {
              user_id: user.user_id,
            },
          },
        },
      });
    }
  }

  console.log("user address created!");
};

export default seedUser_addresses;
