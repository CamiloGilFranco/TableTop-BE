/*
  Warnings:

  - You are about to drop the column `facilitiesId_facility` on the `facilities_per_venue` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[facility_name]` on the table `facilities` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `facility` to the `facilities_per_venue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "facilities_per_venue" DROP CONSTRAINT "facilities_per_venue_facilitiesId_facility_fkey";

-- AlterTable
ALTER TABLE "facilities_per_venue" DROP COLUMN "facilitiesId_facility",
ADD COLUMN     "facility" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "facilities_facility_name_key" ON "facilities"("facility_name");

-- AddForeignKey
ALTER TABLE "facilities_per_venue" ADD CONSTRAINT "facilities_per_venue_facility_fkey" FOREIGN KEY ("facility") REFERENCES "facilities"("facility_name") ON DELETE RESTRICT ON UPDATE CASCADE;
