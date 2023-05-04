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
      dishes: {
        where: {
          active: true,
        },
      },
      dishes_categories: {
        where: {
          active: true,
        },
      },
      venues: {
        where: {
          active: true,
        },
      },
      reservations: {
        where: {
          active: true,
        },
      },
      reviews: true,
      admins: {
        where: {
          active: true,
        },
      },
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
      dishes: {
        where: {
          active: true,
        },
      },
      dishes_categories: {
        where: {
          active: true,
        },
      },
      venues: {
        where: {
          active: true,
        },
      },
      reservations: {
        where: {
          active: true,
        },
      },
      reviews: true,
      admins: {
        where: {
          active: true,
        },
      },
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
          dishes: {
            where: {
              active: true,
            },
          },
        },
      },
      venues: {
        where: {
          active: true,
        },
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
    cuisines,
    photos,
    dishes,
    dishes_categories,
    venues,
    reservations,
    reviews,
    adminEmail,
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
      number_of_sales: 0,
      cuisines,
      photos,
      dishes,
      dishes_categories,
      venues,
      reservations,
      reviews,
      admins: {
        connect: {
          email: adminEmail,
        },
      },
      order_details,
    },
  });
};

// update restaurant
export const updateRestaurant = async (id: string, input: any) => {
  const { logo, main_photo, admin_email } = input;

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
  try {
    return prisma.restaurants.update({
      where: {
        id_restaurant: id,
      },
      data: {
        logo: logo && { set: logo },
        main_photo: main_photo && { set: main_photo },
        ...adminUpdateData,
      },
    });
  } catch (error: any) {
    console.log(error);
  }
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

// gets one restaurant by it's admin
export const getRestaurantByUser = (user_id: string) => {
  return prisma.restaurants.findFirst({
    where: {
      admins: {
        some: {
          user_id,
        },
      },
    },
    include: {
      cuisines: {
        where: {
          active: true
        }
      },
      photos: true,
      dishes: {
        where: {
          active: true,
        },
      },
      dishes_categories: {
        where: {
          active: true,
        },
      },
      venues: {
        where: {
          active: true,
        },
        include: {
          facilities: {
            where: {
              active: true
            }
          }
        },
      },
      reservations: {
        where: {
          active: true,
        },
      },
      reviews: true,
      admins: {
        where: {
          active: true,
        },
      },
      order_details: {
        include:{
          orders: true,
          dishes: true,
        }
      },
  
    },
  });
};

// get a restaurant by venue id
export const getRestaurantByVenueId = async (venueId: string) => {
  try {
    const restaurant = await prisma.restaurants.findFirst({
      where: {
        venues: {
          some: {
            id_restaurant_venue: venueId,
          },
        },
      },
    });
    return restaurant;
  } catch (error) {
    console.error("Error in getRestaurantByVenueId:", error);
    throw error;
  }
};

export const addAdminToRestaurant = async (
  email: string,
  id_restaurant: string
) => {
  try {
    const restaurantExists = await prisma.restaurants.findUnique({
      where: {
        id_restaurant,
      },
    });

    if (!restaurantExists) {
      throw new Error("Restaurant not found");
    }

    return prisma.restaurants.update({
      where: {
        id_restaurant,
      },
      data: {
        admins: {
          connect: {
            email,
          },
        },
      },
    });
  } catch (error: any) {
    throw new Error(`${error.message}`);
  }
};

//update restaurant rating

export const updateRestaurantRating = (id_restaurant: any, rating: any) => {
  return prisma.restaurants.update({
    where: {
      id_restaurant,
    },
    data: {
      rating,
    },
  });
};
