import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// get all restaurants
export const getAllRestaurants = () => {
  return prisma.restaurants.findMany({
    include: {
      cuisines: true,
      photos: true,
      dishes: true,
      dishes_categories: true,
      facilities_per_venue: true,
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
  return prisma.restaurants.findUnique({
    where: {
      id_restaurant: id,
    },
    include: {
      cuisines: true,
      photos: true,
      dishes: true,
      dishes_categories: true,
      facilities_per_venue: true,
      venues: true,
      reservations: true,
      reviews: true,
      admins: true,
      order_details: true,
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
  const restaurant_path = restaurant_name.replaceAll(' ', '').toLowerCase();
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
      facilities_per_venue,
      venues,
      reservations,
      reviews,
      admins,
      order_details
    }
  });
}

// update restaurant 
export const updateRestaurant = (id: string, input: any) => {
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
  const restaurant_path = restaurant_name.replaceAll(' ', '').toLowerCase();

  return prisma.restaurants.update({
    where: {
      id_restaurant: id
    },
    data: {
      restaurant_name: restaurant_name && { set: restaurant_name },
      restaurant_path,
      logo: logo && { set: logo },
      main_photo: main_photo && { set: main_photo },
      rating: rating && { set: rating },
      number_of_sales: number_of_sales && { set: number_of_sales },
      cuisines: cuisines && { set: cuisines },
      photos: photos && { set: photos },
      dishes: dishes && { set: dishes },
      dishes_categories: dishes_categories && { set: dishes_categories },
      facilities_per_venue: facilities_per_venue && { set: facilities_per_venue },
      venues: venues && { set: venues },
      reservations: reservations && { set: reservations },
      reviews: reviews && { set: reviews },
      admins: admins && { set: admins },
      order_details: order_details && { set: order_details }
    }
  });
}

// delete restaurant 
export const deleteRestaurant = (id: string) => {
  return prisma.restaurants.delete({
    where: {
      id_restaurant: id
    }
  });
}