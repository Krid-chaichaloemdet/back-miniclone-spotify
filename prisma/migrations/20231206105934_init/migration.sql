/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Playlist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Playlist_id_key` ON `Playlist`(`id`);
