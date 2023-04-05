/*
  Warnings:

  - You are about to drop the column `numbr_of_sales` on the `restaurants` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[document_number]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number_of_sales` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurants" DROP COLUMN "numbr_of_sales",
ADD COLUMN     "number_of_sales" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_document_number_key" ON "users"("document_number");
