import { PrismaClient } from "@prisma/client";
import seedUsers from "./usersSeeder";
import seedRestaurants from "./restaurantsSeeders";

const prisma = new PrismaClient();

const seeders = [seedRestaurants, seedUsers];

const seed = async () => {
  for (const seeder of seeders) {
    await seeder(prisma);
  }
};

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
