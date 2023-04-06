/*
  Warnings:

  - Added the required column `cuisine_photo` to the `cuisine_categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_venue` to the `restaurant_venues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cuisine_categories" ADD COLUMN     "cuisine_photo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "restaurant_venues" ADD COLUMN     "name_venue" TEXT NOT NULL;
