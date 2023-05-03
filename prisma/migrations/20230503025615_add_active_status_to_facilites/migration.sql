-- AlterTable
ALTER TABLE "facilities" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "facilities_per_venue" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;
