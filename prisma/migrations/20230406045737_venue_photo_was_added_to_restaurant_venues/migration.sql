/*
  Warnings:

  - Added the required column `venue_photo` to the `restaurant_venues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurant_venues" ADD COLUMN     "venue_photo" TEXT NOT NULL;
