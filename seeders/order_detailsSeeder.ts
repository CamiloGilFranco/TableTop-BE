import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedOrder_details = async (prisma: PrismaClient): Promise<void> => {
  const dishes = await prisma.dishes.findMany();
  const orders = await prisma.orders.findMany();

  for (const order of orders) {
    const numberOfDishes = random(1, 10);

    for (let i = 0; i < numberOfDishes; i++) {
      const randomDish = dishes[random(0, dishes.length - 1)];
      await prisma.order_details.create({
        data: {
          orders: {
            connect: {
              id_order: order.id_order,
            },
          },
          dishes: {
            connect: {
              id_dish: randomDish.id_dish,
            },
          },
          restaurants: {
            connect: {
              id_restaurant: randomDish.restaurantsId_restaurant,
            },
          },
        },
      });
    }
  }

  console.log("order_details created!");

  for (const order of orders) {
    const dishList = await prisma.order_details.findMany({
      where: {
        ordersId_order: order.id_order,
      },
    });

    let price = 0;

    for (let i = 0; i < dishList.length; i++) {
      const dish = await prisma.dishes.findUnique({
        where: {
          id_dish: dishList[i].dishesId_dish,
        },
      });

      dish ? (price += dish.price) : 0;
    }

    await prisma.orders.update({
      where: {
        id_order: order.id_order,
      },
      data: {
        price: price,
      },
    });
  }

  console.log("order prices updated!");
};

export default seedOrder_details;
