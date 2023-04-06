/*
  Warnings:

  - You are about to drop the column `date` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `reviews` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "date";
