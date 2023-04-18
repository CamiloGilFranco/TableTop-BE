/*
  Warnings:

  - You are about to drop the column `cuisine_photo` on the `cuisine_categories` table. All the data in the column will be lost.
  - Added the required column `restaurantsId_restaurant` to the `facilities_per_venue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cuisine_categories" DROP COLUMN "cuisine_photo";

-- AlterTable
ALTER TABLE "facilities_per_venue" ADD COLUMN     "restaurantsId_restaurant" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "facilities_per_venue" ADD CONSTRAINT "facilities_per_venue_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;
