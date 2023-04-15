import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Input = {
  restaurantsId_restaurant: string;
  facilitiesId_facility: string;
  restaurant_venuesId_restaurant_venue: string;
};

//get all
export const getAllFacilitiesVenue = () => {
  return prisma.facilities_per_venue.findMany();
};
//get by Id
export const getFacilityVenueById = (id: string) => {
  return prisma.facilities_per_venue.findUnique({
    where: {
      id_facility_per_venue: id,
    },
  });
};
//create -> post
export const createFacilityVenue = (input: Input) => {
  const {
    restaurantsId_restaurant,
    facilitiesId_facility,
    restaurant_venuesId_restaurant_venue,
  } = input;
  return prisma.facilities_per_venue.create({
    data: {
      restaurantsId_restaurant,
      facilitiesId_facility,
      restaurant_venuesId_restaurant_venue,
    },
  });
};

export const updateFacilityVenue = (id: string, input: any) => {
  const {
    restaurantsId_restaurant,
    facilitiesId_facility,
    restaurant_venuesId_restaurant_venue,
  } = input;
  return prisma.facilities_per_venue.update({
    where: {
      id_facility_per_venue: id,
    },
    data: {
      restaurantsId_restaurant,
      facilitiesId_facility,
      restaurant_venuesId_restaurant_venue,
    },
  });
};

export const deleteFacilityVenue = (id: string) => {
  return prisma.facilities_per_venue.delete({
    where: {
      id_facility_per_venue: id,
    },
  });
};
