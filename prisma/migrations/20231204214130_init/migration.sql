/*
  Warnings:

  - You are about to drop the column `songId` on the `playlist` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `playlist` DROP FOREIGN KEY `Playlist_songId_fkey`;

-- AlterTable
ALTER TABLE `playlist` DROP COLUMN `songId`;
