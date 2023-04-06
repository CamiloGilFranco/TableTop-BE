import { PrismaClient } from "@prisma/client";
import seedUsers from "./usersSeeder";
import seedRestaurants from "./restaurantsSeeder";
import seedUser_addresses from "./user_addressesSeeder";
import seedUser_phone_numbers from "./user_phone_numbersSeeder";
import seedFacilities from "./facilitiesSeeder";
import seedCuisine_categories from "./cuisine_categoriesSeeder";
import seedCuisine_per_restaurant from "./cuisines_perRestaurantSeeder";
import seedRestaurant_photos from "./restaurant_photosSeeder";
import seedReviews from "./reviewsSeeder";
import seedRestaurant_venues from "./restaurant_venuesSeeder";

const prisma = new PrismaClient();

const seeders = [
  seedRestaurants,
  seedUsers,
  seedUser_addresses,
  seedUser_phone_numbers,
  seedFacilities,
  seedCuisine_categories,
  seedCuisine_per_restaurant,
  seedRestaurant_photos,
  seedReviews,
  seedRestaurant_venues,
];

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
