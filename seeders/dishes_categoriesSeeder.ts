import { PrismaClient } from "@prisma/client";
const menus = require("../assets/menus.json");

const prisma = new PrismaClient();

const seedDish_categories = async (prisma: PrismaClient): Promise<void> => {
  const restaurants = await prisma.restaurants.findMany();
  const menu = Object.keys(menus);

  for (let i = 0; i < menu.length; i++) {
    const categories = Object.keys(menus[menu[i]]);

    for (let j = 0; j < categories.length; j++) {
      await prisma.dishes_categories.create({
        data: {
          dishes_category: categories[j],
          restaurants: {
            connect: {
              id_restaurant: restaurants[i].id_restaurant,
            },
          },
        },
      });
    }
  }

  console.log("dish_categories created!");
};

export default seedDish_categories;
