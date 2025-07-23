/*
  Warnings:

  - You are about to drop the column `coverImage` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `longDesc` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `shortDesc` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Project` table. All the data in the column will be lost.
  - Added the required column `liveUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longDescription` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortDescription` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Project_slug_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "coverImage",
DROP COLUMN "longDesc",
DROP COLUMN "shortDesc",
DROP COLUMN "slug",
DROP COLUMN "updatedAt",
ADD COLUMN     "liveUrl" TEXT NOT NULL,
ADD COLUMN     "longDescription" TEXT NOT NULL,
ADD COLUMN     "shortDescription" TEXT NOT NULL;
