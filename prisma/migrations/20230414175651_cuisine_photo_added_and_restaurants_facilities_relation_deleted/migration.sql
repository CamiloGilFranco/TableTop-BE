/*
  Warnings:

  - You are about to drop the column `restaurantsId_restaurant` on the `facilities_per_venue` table. All the data in the column will be lost.
  - Added the required column `cuisine_photo` to the `cuisine_categories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "facilities_per_venue" DROP CONSTRAINT "facilities_per_venue_restaurantsId_restaurant_fkey";

-- AlterTable
ALTER TABLE "cuisine_categories" ADD COLUMN     "cuisine_photo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "facilities_per_venue" DROP COLUMN "restaurantsId_restaurant";
