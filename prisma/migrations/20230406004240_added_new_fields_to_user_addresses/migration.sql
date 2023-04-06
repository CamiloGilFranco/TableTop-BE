/*
  Warnings:

  - Added the required column `address_name` to the `user_addresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `user_addresses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_addresses" ADD COLUMN     "address_name" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL;
