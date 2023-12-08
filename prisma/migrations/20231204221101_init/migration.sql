-- AlterTable
ALTER TABLE `playlist` ADD COLUMN `songId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Playlist` ADD CONSTRAINT `Playlist_songId_fkey` FOREIGN KEY (`songId`) REFERENCES `Song`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
