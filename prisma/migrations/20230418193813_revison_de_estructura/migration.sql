/*
  Warnings:

  - Made the column `restaurantsId_restaurant` on table `order_details` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "order_details" DROP CONSTRAINT "order_details_restaurantsId_restaurant_fkey";

-- AlterTable
ALTER TABLE "order_details" ALTER COLUMN "restaurantsId_restaurant" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "order_details" ADD CONSTRAINT "order_details_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE RESTRICT ON UPDATE CASCADE;
