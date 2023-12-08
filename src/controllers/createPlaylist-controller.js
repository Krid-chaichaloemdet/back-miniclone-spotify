const prisma = require('../models/prisma')


exports.createPlayList = async (req,res,next) => {

    try {
        console.log("asdas",req.body)
        const afterCreate = await prisma.playlist.create({
            data:{
                userId: +1

            }
        })
        return res.status(200).json(afterCreate)
    } catch (error) {
        console.log(error)
    }
}

exports.addSongToPlayList = async (req, res, next) => {
        try {
            // console.log("addsongTopalylist",req.body[1].playListId )

            const afterAddSongToPlayList = await prisma.subPlaylist.create({
                data:{
                    playlistId: +req.body[1].playListId,
                    songId: +req.body[0].id
                }
                
                }
            )
            console.log("after added",afterAddSongToPlayList )
            return res.status(200).json(afterAddSongToPlayList)
        } catch (error) {
            console.log(error)
        }
}

exports.readSongAfterAdd = async (req,res,next)=> {
    try {

        console.log("readSongAfterAdd",req.body)
        // const result = await prisma.subPlaylist.findMany({
        //     where:{
        //         playlistId: +req.body.playlistId
       
        //     },include : {
        //         song : true
        //     }
        // })
        // return res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

exports.search = async (req, res,next) => {
    try {

        console.log("searchhh",req.query.q)
        const afterSearch = await prisma.song.findMany({
            where:{
                songName: {
                    contains: req.query.q
                }
            }
        })
        return res.status(200).json(afterSearch)
    } catch (error) {
        console.log(error)
    }
}

exports.searchSinglePlayList = async (req,res,next) =>{
    try {
        // console.log("sear single",req.body[0].id)
        let displayId = req.body[1].disPlayPlaiListID
        const afterSearchSinglePlayList = await prisma.playlist.findUnique({
            where:{
                id: +req.body[0].id
            },include:{
                subplaylist:{
                    include:{
                        song:true
                    }
                }
            }
        })
        console.log(afterSearchSinglePlayList)
        return res.status(200).json(afterSearchSinglePlayList)
    } catch (error) {
        console.log(error)
    }
}

exports.DeleteSongInPlayList = async (req, res, next) => {
    try {
        console.log("req.body",req.params.Id)

        const afterDel = await prisma.subPlaylist.delete({
            where:{
                id: +req.params.Id
            },
        });
        // const currentList = await prisma.playlist.findMany({
        //     where:{
        //         id:afterDel.playlistId
        //     },include:{
        //         song:true
        //     }
        // })
        console.log("after del",afterDel)
        return res.status(200).json(afterDel)
    } catch (error) {
        console.log(error)
    }
}
exports.deletePlayList = async (req,res,next) => {
    try {
        console.log("req.delll",req.body.id)
        const afterDel = await prisma.playlist.delete({
            where:{
                id: +req.body.id
            },include:{
                subplaylist:true
            }
        })
        return res.status(200).json(afterDel)
    } catch (error) {
        console.log(error)
    }
}

exports.getAllSongs = async (req,res,next) => {
    try {
        const afterGetAllSongs = await prisma.song.findMany()
        return res.status(200).json(afterGetAllSongs)
    } catch (error) {
        console.log(error)
    }
}


exports.getAllPlayList = async (req,res,next) => {
    try {
        const afterGetAllPlayList = await prisma.playlist.findMany({
            where: {
                userId:+1
            }
        })

        res.status(200).json(afterGetAllPlayList)
    } catch (error) {
     console.log(error)   
    }
}
exports.getAllPlayListById = async (req,res,next) => {
    try {
        const playlistId = req.params.playlistId;

        const allItemInPlayList = await prisma.subPlaylist.findMany({
            where: {
                playlistId:+playlistId
            }
        })

        res.status(200).json(allItemInPlayList)
    } catch (error) {
     console.log(error)   
    }
}
