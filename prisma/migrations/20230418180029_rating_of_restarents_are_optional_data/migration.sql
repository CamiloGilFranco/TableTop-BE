/*
  Warnings:

  - A unique constraint covering the columns `[cuisine_photo]` on the table `cuisine_categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[main_photo]` on the table `restaurants` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "restaurant_venues" ALTER COLUMN "phone_number" DROP NOT NULL;

-- AlterTable
ALTER TABLE "restaurants" ALTER COLUMN "rating" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cuisine_categories_cuisine_photo_key" ON "cuisine_categories"("cuisine_photo");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_main_photo_key" ON "restaurants"("main_photo");
