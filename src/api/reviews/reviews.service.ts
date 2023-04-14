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

export const getReviewById = (id: string) => {
  return prisma.reviews.findUnique({
    where: {
      id_review: id,
    },
  });
};

export const createReview = (input: Input) => {
  const { title, rating, comment, restaurantsId_restaurant, usersUser_id } =
    input;
  return prisma.reviews.create({
    data: {
      title,
      rating,
      comment,
      restaurantsId_restaurant,
      usersUser_id,
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
