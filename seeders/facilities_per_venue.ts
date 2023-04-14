import { PrismaClient } from "@prisma/client";
import { random } from "./randomFunction";

const prisma = new PrismaClient();

const seedFacilities_per_venue = async (
  prisma: PrismaClient
): Promise<void> => {
  const restaurantVenues = await prisma.restaurant_venues.findMany();
  const facilities = await prisma.facilities.findMany();
  const facilitiesList = Object.values(facilities);

  for (const venue of restaurantVenues) {
    const numberOfFacilities = random(0, facilitiesList.length - 1);

    for (let i = 0; i < numberOfFacilities; i++) {
      await prisma.facilities_per_venue.create({
        data: {
          facilities: {
            connect: {
              id_facility:
                facilitiesList[random(0, facilitiesList.length - 1)]
                  .id_facility,
            },
          },
          restaurant_venues: {
            connect: {
              id_restaurant_venue: venue.id_restaurant_venue,
            },
          },
        },
      });
    }
  }

  console.log("restaurant_per_venues created!");
};

export default seedFacilities_per_venue;
