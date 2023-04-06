/*
  Warnings:

  - You are about to drop the column `cuisine_photo` on the `cuisine_categories` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantsId_restaurant` on the `orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_restaurantsId_restaurant_fkey";

-- AlterTable
ALTER TABLE "cuisine_categories" DROP COLUMN "cuisine_photo";

-- AlterTable
ALTER TABLE "order_details" ADD COLUMN     "restaurantsId_restaurant" TEXT;

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "restaurantsId_restaurant";

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE SET NULL ON UPDATE CASCADE;
