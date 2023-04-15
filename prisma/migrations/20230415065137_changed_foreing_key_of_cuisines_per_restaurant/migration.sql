/*
  Warnings:

  - You are about to drop the column `cuisine_categoriesId_cuisine_category` on the `cuisines_per_restaurant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cuisine_category]` on the table `cuisine_categories` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cuisine_category` to the `cuisines_per_restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cuisines_per_restaurant" DROP CONSTRAINT "cuisines_per_restaurant_cuisine_categoriesId_cuisine_categ_fkey";

-- AlterTable
ALTER TABLE "cuisines_per_restaurant" DROP COLUMN "cuisine_categoriesId_cuisine_category",
ADD COLUMN     "cuisine_category" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cuisine_categories_cuisine_category_key" ON "cuisine_categories"("cuisine_category");

-- AddForeignKey
ALTER TABLE "cuisines_per_restaurant" ADD CONSTRAINT "cuisines_per_restaurant_cuisine_category_fkey" FOREIGN KEY ("cuisine_category") REFERENCES "cuisine_categories"("cuisine_category") ON DELETE RESTRICT ON UPDATE CASCADE;
