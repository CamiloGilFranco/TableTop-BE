import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";
const dat = require("../assets/dat.json");

const prisma = new PrismaClient();

const seedRestaurants = async (prisma: PrismaClient): Promise<void> => {
  const restaurants = [];

  for (let i = 0; i < dat.length; i++) {
    const restaurant = {
      restaurant_path: dat[i].restaurantPath,
      restaurant_name: dat[i].restaurantName,
      logo: dat[i].logo,
      main_photo: dat[i].picture,
      rating: dat[i].rating,
      number_of_sales: random(10, 100),
    };

    restaurants.push(restaurant);
  }

  await prisma.restaurants.createMany({
    data: restaurants,
  });

  console.log("restaurants created!");
};

export default seedRestaurants;
