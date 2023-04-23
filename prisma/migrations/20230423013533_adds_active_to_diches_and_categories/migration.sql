-- AlterTable
ALTER TABLE "dishes" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "dishes_categories" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;
