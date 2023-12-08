const express = require("express");
const createPlayList = require('../controllers/createPlaylist-controller')
const router = express.Router();


router.post('/create',createPlayList.createPlayList)
router.post('/delete',createPlayList.deletePlayList)

router.post('/searchSinglePlayList',createPlayList.searchSinglePlayList)

router.post('/addSongToPlayList',createPlayList.addSongToPlayList)
router.post('/readSongAfterAdd',createPlayList.readSongAfterAdd)
router.delete('/DeleteSongInPlayList/:Id',createPlayList.DeleteSongInPlayList)

router.get('/getAllSongs',createPlayList.getAllSongs)
router.get('/search',createPlayList.search)
router.post('/getAllPlayList',createPlayList.getAllPlayList)

module.exports = router;