/*
  Warnings:

  - Added the required column `restaurantsId_restaurant` to the `facilities_per_venue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "facilities_per_venue" ADD COLUMN     "restaurantsId_restaurant" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "facilities_per_venue" ADD CONSTRAINT "facilities_per_venue_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;
