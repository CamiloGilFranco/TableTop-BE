/*
  Warnings:

  - Added the required column `main_photo` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurants" ADD COLUMN     "main_photo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "restaurantsId_restaurant" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_restaurantsId_restaurant_fkey" FOREIGN KEY ("restaurantsId_restaurant") REFERENCES "restaurants"("id_restaurant") ON DELETE SET NULL ON UPDATE CASCADE;
