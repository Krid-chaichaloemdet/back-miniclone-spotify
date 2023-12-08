/*
  Warnings:

  - You are about to drop the column `songId` on the `playlist` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `playlist` DROP FOREIGN KEY `Playlist_songId_fkey`;

-- AlterTable
ALTER TABLE `playlist` DROP COLUMN `songId`;

-- CreateTable
CREATE TABLE `SubPlaylist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `songId` INTEGER NULL,
    `playlistId` INTEGER NOT NULL,

    UNIQUE INDEX `SubPlaylist_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SubPlaylist` ADD CONSTRAINT `SubPlaylist_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SubPlaylist` ADD CONSTRAINT `SubPlaylist_playlistId_fkey` FOREIGN KEY (`playlistId`) REFERENCES `Playlist`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
