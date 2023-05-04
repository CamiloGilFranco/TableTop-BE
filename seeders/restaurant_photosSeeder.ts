import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedRestaurant_photos = async (prisma: PrismaClient): Promise<void> => {
  const restaurants = await prisma.restaurants.findMany();

  for (const restaurant of restaurants) {
    const numberOfPhotos = random(0, 20);

    for (let i = 0; i < numberOfPhotos; i++) {
      await prisma.restaurant_photos.create({
        data: {
          photo_link: `https://raw.githubusercontent.com/CamiloGilFranco/TableTop-FE/main/src/assets/gallery/${random(
            1,
            40
          )}.jpg`,
          restaurants: {
            connect: {
              id_restaurant: restaurant.id_restaurant,
            },
          },
        },
      });
    }
  }

  console.log("restaurant photos created!");
};

export default seedRestaurant_photos;
