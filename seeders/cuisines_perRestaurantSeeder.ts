import { PrismaClient } from "@prisma/client";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedCuisine_per_restaurant = async (
  prisma: PrismaClient
): Promise<void> => {
  const restaurants = await prisma.restaurants.findMany();
  const cuisines = await prisma.cuisine_categories.findMany();

  const cuisinesID = Object.values(cuisines);

  for (const restaurant of restaurants) {
    const numberOfCuisines = random(0, 3);

    for (let i = 0; i < numberOfCuisines; i++) {
      const singleCuisine =
        cuisinesID[random(0, cuisinesID.length - 1)].id_cuisine_category;
      await prisma.cuisines_per_restaurant.create({
        data: {
          restaurants: {
            connect: {
              id_restaurant: restaurant.id_restaurant,
            },
          },
          cuisine_categories: {
            connect: {
              id_cuisine_category: singleCuisine,
            },
          },
        },
      });
    }
  }

  console.log("cuisines_per_restaurant created!");
};

export default seedCuisine_per_restaurant;
