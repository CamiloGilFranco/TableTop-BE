/*
  Warnings:

  - Added the required column `quantity` to the `order_details` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order_details" ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "user_addressesId_address" TEXT;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_addressesId_address_fkey" FOREIGN KEY ("user_addressesId_address") REFERENCES "user_addresses"("id_address") ON DELETE SET NULL ON UPDATE CASCADE;
