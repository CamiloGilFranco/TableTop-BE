import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Input = {
  title: string;
  rating: number;
  comment: string;
  restaurantsId_restaurant: string;
  usersUser_id: string;
};

export const getAllReviews = () => {
  return prisma.reviews.findMany();
};

//search for a review on a specific restaurant
export const getAllReviewsRestaurant = (restaurant: any, user: any) => {
  return prisma.reviews.findFirst({
    where: {
      restaurantsId_restaurant: restaurant,
      usersUser_id: user,
    },
  });
};

//count the number of reviews of a restaurant
export const getNumberOfReviews = (restaurant: any) => {
  return prisma.reviews.count({
    where: {
      restaurantsId_restaurant: restaurant,
    },
  });
};

export const getReviewById = (id: string) => {
  return prisma.reviews.findUnique({
    where: {
      id_review: id,
    },
  });
};

export const createReview = (input: any) => {
  const { user, rating, title, comment, id_restaurant } = input;
  return prisma.reviews.create({
    data: {
      title,
      rating,
      comment,
      restaurantsId_restaurant: id_restaurant,
      usersUser_id: user,
    },
  });
};

export const updateReview = (id: string, input: Input) => {
  const { title, rating, comment, restaurantsId_restaurant, usersUser_id } =
    input;
  return prisma.reviews.update({
    where: {
      id_review: id,
    },
    data: {
      title,
      rating,
      comment,
      restaurantsId_restaurant,
      usersUser_id,
    },
  });
};

export const deleteReview = (id: string) => {
  return prisma.reviews.delete({
    where: {
      id_review: id,
    },
  });
};
