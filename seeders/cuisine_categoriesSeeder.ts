import { PrismaClient } from "@prisma/client";
const cuisinesList = require("../assets/cuisines.json");

const prisma = new PrismaClient();

const seedCuisine_categories = async (prisma: PrismaClient): Promise<void> => {
  const cuisines = [];
  const cuisinesListKeys = Object.keys(cuisinesList);

  for (let i = 0; i < cuisinesListKeys.length; i++) {
    const cuisine = {
      cuisine_category: cuisinesListKeys[i],
      cuisine_photo: cuisinesList[cuisinesListKeys[i]],
    };

    cuisines.push(cuisine);
  }

  await prisma.cuisine_categories.createMany({
    data: cuisines,
  });

  console.log("cuisines created!");
};

export default seedCuisine_categories;
