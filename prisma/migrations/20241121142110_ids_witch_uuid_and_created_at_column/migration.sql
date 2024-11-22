/*
  Warnings:

  - The primary key for the `car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `driver` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `car` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `driver` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `member` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "car" DROP CONSTRAINT "car_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "car_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "driver" DROP CONSTRAINT "driver_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "driver_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("id");
