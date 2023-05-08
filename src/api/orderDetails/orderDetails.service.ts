import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Input = {
  ordersId_order: string;
  dishesId_dish: string;
  quantity: number,
  restaurantsId_restaurant: string
};

export const getAllOrderDetails = () => {
  return prisma.order_details.findMany();
};

export const getOrderDetailById = (id: string) => {
  return prisma.order_details.findUnique({
    where: {
      id_order_detail: id,
    },
  });
};

export const createOrderDetail = (input: Input) => {
  const { ordersId_order, dishesId_dish, quantity, restaurantsId_restaurant } = input;
  return prisma.order_details.create({
    data: {
      ordersId_order,
      dishesId_dish,
      quantity,
      restaurantsId_restaurant,
    },
  });
};


export const updateOrderDetail = (id: string, input: Input) => {
  const { ordersId_order, dishesId_dish } = input;
  return prisma.order_details.update({
    where: {
      id_order_detail: id,
    },
    data: {
      ordersId_order,
      dishesId_dish,
    },
  });
};

export const deleteOrderDetail = (id: string) => {
  return prisma.order_details.delete({
    where: {
      id_order_detail: id,
    },
  });
};

export const createSeveralOrderDetail = (input: any) => {
  return prisma.order_details.createMany({
    data: input,
  });
};
