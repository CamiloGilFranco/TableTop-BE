import { PrismaClient } from "@prisma/client";
const menus = require("../assets/menus.json");

const prisma = new PrismaClient();

const seedDishes = async (prisma: PrismaClient): Promise<void> => {
  const dishesCategories = await prisma.dishes_categories.findMany();

  const categoriesList = [];

  for (const menu in menus) {
    const categories = menus[menu];
    for (const category in categories) {
      categoriesList.push(categories[category]);
    }
  }

  for (let i = 0; i < dishesCategories.length; i++) {
    const numberOfCategories = categoriesList[i].length;

    for (let j = 0; j < numberOfCategories; j++) {
      await prisma.dishes.create({
        data: {
          title: categoriesList[i][j].title,
          description: categoriesList[i][j].description,
          price: categoriesList[i][j].price,
          restaurants: {
            connect: {
              id_restaurant: dishesCategories[i].restaurantsId_restaurant,
            },
          },
          dishes_categories: {
            connect: {
              id_dishes_category: dishesCategories[i].id_dishes_category,
            },
          },
        },
      });
    }
  }

  console.log("dishes created");
};

export default seedDishes;
