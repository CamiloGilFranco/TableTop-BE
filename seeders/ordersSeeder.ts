import { PrismaClient } from "@prisma/client";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedOrders = async (prisma: PrismaClient): Promise<void> => {
  const users = await prisma.users.findMany({
    include: {
      addresses: true,
    },
  });

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
          user_addresses: {
            connect: {
              id_address:
                user.addresses[random(0, user.addresses.length - 1)].id_address,
            },
          },
        },
      });
    }
  }

  console.log("orders created!");
};

export default seedOrders;
