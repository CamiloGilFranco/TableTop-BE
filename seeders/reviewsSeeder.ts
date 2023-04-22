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
    const id_restaurant = restaurant.id_restaurant;
    let ratingSum = 0;
    let dataQuantity = 0;

    for (let i = 0; i < numberOfReviews; i++) {
      const rating = random(1, 5);

      await prisma.reviews.create({
        data: {
          title: faker.lorem.words(random(1, 5)),
          rating,
          comment: faker.lorem.sentence(),
          restaurants: {
            connect: {
              id_restaurant,
            },
          },
          users: {
            connect: {
              user_id: usersList[random(0, usersList.length - 1)].user_id,
            },
          },
        },
      });

      dataQuantity++;
      ratingSum += rating;
    }

    const rating = (await ratingSum) / dataQuantity;

    await prisma.restaurants.update({
      where: {
        id_restaurant: id_restaurant,
      },
      data: {
        rating,
      },
    });
  }

  console.log("reviews created!");
};

export default seedReviews;
