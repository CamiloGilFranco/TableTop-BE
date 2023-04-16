/*
  Warnings:

  - You are about to drop the column `restaurantsId_restaurant` on the `facilities_per_venue` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "facilities_per_venue" DROP CONSTRAINT "facilities_per_venue_restaurantsId_restaurant_fkey";

-- AlterTable
ALTER TABLE "facilities_per_venue" DROP COLUMN "restaurantsId_restaurant";
