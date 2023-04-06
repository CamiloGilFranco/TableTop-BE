/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "restaurants" (
    "id_restaurant" TEXT NOT NULL,
    "restaurant_path" TEXT NOT NULL,
    "restaurant_name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "numbr_of_sales" INTEGER NOT NULL,

    CONSTRAINT "restaurants_pkey" PRIMARY KEY ("id_restaurant")
);

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_restaurant_path_key" ON "restaurants"("restaurant_path");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_restaurant_name_key" ON "restaurants"("restaurant_name");

-- CreateIndex
CREATE UNIQUE INDEX "restaurants_logo_key" ON "restaurants"("logo");
