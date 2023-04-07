import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedUsers = async (prisma: PrismaClient): Promise<void> => {
  const users = [];
  const documentTypes = ["CC", "CE", "PP"];
  const userRoles = {
    user: "user",
    restaurantAdmin: "restaurantAdmin",
    appAdmin: "appAdmin",
  };

  const restaurants = await prisma.restaurants.findMany();

  for (const restaurant of restaurants) {
    const numberOfAdmins = random(1, 5);

    for (let i = 0; i < numberOfAdmins; i++) {
      await prisma.users.create({
        data: {
          email: faker.internet.email(),
          password: faker.internet.password(),
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
    }
  }

  for (let i = 0; i < 100; i++) {
    const user = {
      email: faker.internet.email(),
      password: faker.internet.password(),
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
  }

  for (let i = 0; i < random(1, 10); i++) {
    const appAdmin = {
      email: faker.internet.email(),
      password: faker.internet.password(),
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
  }

  await prisma.users.createMany({
    data: users,
  });

  console.log("users are created!");
};

export default seedUsers;
