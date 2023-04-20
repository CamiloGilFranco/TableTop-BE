import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";
import { existsSync, unlinkSync, appendFileSync } from "fs";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const seedUsers = async (prisma: PrismaClient): Promise<void> => {
  const users = [];
  const documentTypes = ["CC", "CE", "PP"];
  const userRoles = {
    user: "user",
    restaurantAdmin: "restaurantAdmin",
    appAdmin: "appAdmin",
  };

  if (existsSync("./assets/usersData.txt")) {
    unlinkSync("./assets/usersData.txt");
  }

  const restaurants = await prisma.restaurants.findMany();

  for (const restaurant of restaurants) {
    const numberOfAdmins = random(1, 5);

    for (let i = 0; i < numberOfAdmins; i++) {
      const email = faker.internet.email();
      const userPassword = faker.internet.password();
      const password = await bcrypt.hash(userPassword, 10);

      await prisma.users.create({
        data: {
          email,
          password,
          name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          document_type: documentTypes[random(0, documentTypes.length - 1)],
          document_number: random(100000, 999999999999).toString(),
          date_of_birth: faker.date.birthdate({
            min: 18,
            max: 80,
            mode: "age",
          }),
          city: faker.address.cityName(),
          contact_email: random(0, 1) === 1,
          contact_sms: random(0, 1) === 1,
          contact_wpp: random(0, 1) === 1,
          user_role: userRoles.restaurantAdmin,
          restaurants: {
            connect: {
              id_restaurant: restaurant.id_restaurant,
            },
          },
        },
      });

      appendFileSync(
        "./assets/usersData.txt",
        `Rol: restaurantAdmin --- Email: ${email} --- Password: ${userPassword} --- AdminOf: ${restaurant.restaurant_name}\n`
      );
    }
  }

  for (let i = 0; i < 100; i++) {
    const email = faker.internet.email();
    const userPassword = faker.internet.password();
    const password = await bcrypt.hash(userPassword, 10);

    const user = {
      email,
      password,
      name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      document_type: documentTypes[random(0, documentTypes.length - 1)],
      document_number: random(100000, 999999999999).toString(),
      date_of_birth: faker.date.birthdate({ min: 18, max: 80, mode: "age" }),
      city: faker.address.cityName(),
      contact_email: random(0, 1) === 1,
      contact_sms: random(0, 1) === 1,
      contact_wpp: random(0, 1) === 1,
      user_role: userRoles.user,
    };

    users.push(user);

    appendFileSync(
      "./assets/usersData.txt",
      `Rol: user --- Email: ${email} --- Password: ${userPassword}\n`
    );
  }

  for (let i = 0; i < random(1, 10); i++) {
    const email = faker.internet.email();
    const userPassword = faker.internet.password();
    const password = await bcrypt.hash(userPassword, 10);

    const appAdmin = {
      email,
      password,
      name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      document_type: documentTypes[random(0, documentTypes.length - 1)],
      document_number: random(100000, 999999999999).toString(),
      date_of_birth: faker.date.birthdate({ min: 18, max: 80, mode: "age" }),
      city: faker.address.cityName(),
      contact_email: random(0, 1) === 1,
      contact_sms: random(0, 1) === 1,
      contact_wpp: random(0, 1) === 1,
      user_role: userRoles.appAdmin,
    };

    users.push(appAdmin);

    appendFileSync(
      "./assets/usersData.txt",
      `Rol: appAdmin --- Email: ${email} --- Password: ${userPassword}\n`
    );
  }

  await prisma.users.createMany({
    data: users,
  });

  console.log("users are created!");
};

export default seedUsers;
