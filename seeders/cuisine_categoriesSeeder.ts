import { PrismaClient } from "@prisma/client";
const cuisinesList = require("../assets/cuisines.json");

const prisma = new PrismaClient();

const seedCuisine_categories = async (prisma: PrismaClient): Promise<void> => {
  const cuisines = [];

  for (const cuisine in cuisinesList) {
    const singleCuisine = {
      cuisine_category: cuisine,
      cuisine_photo: cuisinesList[cuisine],
    };

    cuisines.push(singleCuisine);
  }

  /* npx ts-node ./seeders/cuisine_categoriesSeeder.ts */

  await prisma.cuisine_categories.createMany({
    data: cuisines,
  });

  console.log("cuisines created!");
};

export default seedCuisine_categories;
