import { PrismaClient } from "@prisma/client";
import { getUserByEmail, updateUserRole } from "../users/users.services";
const prisma = new PrismaClient();

// get all restaurants
export const getAllRestaurants = () => {
  return prisma.restaurants.findMany({
    where: {
      active: true,
    },
    include: {
      cuisines: true,
      photos: true,
      dishes: true,
      dishes_categories: true,
      venues: true,
      reservations: true,
      reviews: true,
      admins: true,
      order_details: true,
    },
  });
};


// get restaurant by id
export const getAllRestaurantById = (id: string) => {
  return prisma.restaurants.findFirst({
    where: {
      id_restaurant: id,
      active: true,
    },
    include: {
      cuisines: true,
      photos: true,
      dishes: true,
      dishes_categories: true,
      venues: true,
      reservations: true,
      reviews: true,
      admins: true,
      order_details: true,
    },
  });
};

//Get restaurants for RestaurantList
export const getAllRestaurantsWithCuisines = () => {
  return prisma.restaurants.findMany({
    where: {
      active: true,
    },
    include: {
      cuisines: true,
    },
  });
};

// get restaurant by path
export const getRestaurantByPath = (path: string) => {
  return prisma.restaurants.findFirst({
    where: {
      restaurant_path: path,
      active: true,
    },
    include: {
      cuisines: true,
      photos: true,
      dishes_categories: {
        include: {
          dishes: true,
        },
      },
      venues: {
        include: {
          facilities: true,
        },
      },
      reviews: true,
    },
  });
};

// create new restaurant
export const createRestaurant = (input: any) => {
  const {
    restaurant_name,
    logo,
    main_photo,
    rating,
    number_of_sales,
    cuisines,
    photos,
    dishes,
    dishes_categories,
    facilities_per_venue,
    venues,
    reservations,
    reviews,
    admins,
    order_details,
  } = input;
  const restaurant_path = restaurant_name.replaceAll(" ", "").toLowerCase();
  return prisma.restaurants.create({
    data: {
      restaurant_path,
      restaurant_name,
      logo,
      main_photo,
      rating,
      number_of_sales,
      cuisines,
      photos,
      dishes,
      dishes_categories,
      venues,
      reservations,
      reviews,
      admins,
      order_details,
    },
  });
};

// update restaurant
export const updateRestaurant = async (id: string, input: any) => {

  const {
    restaurant_name,
    logo,
    main_photo,
    admin_email,
  } = input;
  const restaurant_path = restaurant_name.replaceAll(" ", "").toLowerCase();

  let adminUpdateData = {};
  if (admin_email) {
    const existingUser = await getUserByEmail(admin_email);
    if (!existingUser) {
      throw new Error("Admin email does not match any existing user");
    }
    await updateUserRole(admin_email, "restaurantAdmin");
    adminUpdateData = {
      admins: {
        connect: {
          user_id: existingUser.user_id,
        },
      },
    };
  }

  return prisma.restaurants.update({
    where: {
      id_restaurant: id,
    },
    data: {
      restaurant_name: restaurant_name && { set: restaurant_name },
      restaurant_path,
      logo: logo && { set: logo },
      main_photo: main_photo && { set: main_photo },
      ...adminUpdateData,
    },
  });
};

// delete restaurant
export const deactivateRestaurant = (id_restaurant: string) => {
  return prisma.restaurants.update({
    where: {
      id_restaurant,
    },
    data: {
      active: false,
    },
  });
};