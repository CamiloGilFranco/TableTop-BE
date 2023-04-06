import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedUser_phone_numbers = async (prisma: PrismaClient): Promise<void> => {
  const users = await prisma.users.findMany();

  for (const user of users) {
    const quantityOfNumbers = random(1, 2);

    for (let i = 0; i < quantityOfNumbers; i++) {
      await prisma.user_phone_numbers.create({
        data: {
          phone_number: faker.phone.number(),
          users: {
            connect: {
              user_id: user.user_id,
            },
          },
        },
      });
    }
  }

  console.log("user phone numbers creates!");
};

export default seedUser_phone_numbers;
