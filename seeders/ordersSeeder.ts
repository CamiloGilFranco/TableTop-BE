import { PrismaClient } from "@prisma/client";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedOrders = async (prisma: PrismaClient): Promise<void> => {
  const users = await prisma.users.findMany();

  for (const user of users) {
    const numberOfOrders = random(0, 5);

    for (let i = 0; i < numberOfOrders; i++) {
      await prisma.orders.create({
        data: {
          price: 0,
          users: {
            connect: {
              user_id: user.user_id,
            },
          },
        },
      });
    }
  }

  console.log("orders created!");
};

export default seedOrders;
