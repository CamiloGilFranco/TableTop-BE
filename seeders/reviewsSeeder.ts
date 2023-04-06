import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedReviews = async (prisma: PrismaClient): Promise<void> => {
  const restaurants = await prisma.restaurants.findMany();
  const users = await prisma.users.findMany();
  const usersList = Object.values(users);

  for (const restaurant of restaurants) {
    const numberOfReviews = random(0, 20);

    for (let i = 0; i < numberOfReviews; i++) {
      await prisma.reviews.create({
        data: {
          title: faker.lorem.words(random(1, 5)),
          rating: random(1, 5),
          comment: faker.lorem.sentence(),
          restaurants: {
            connect: {
              id_restaurant: restaurant.id_restaurant,
            },
          },
          users: {
            connect: {
              user_id: usersList[random(0, usersList.length - 1)].user_id,
            },
          },
        },
      });
    }
  }

  console.log("reviews created!");
};

export default seedReviews;
