const router = require('express').Router();
const { Map, Players } = require('../models');

// GET request for map on homepage
router.get('/', async (req, res) => {
    try {
        const mapData = await Map.findOne({
            include: [
                {
                    model: Map,
                    attributes: ['id', 'map_one', 'map_two', 'map_three']
                }
            ]
        })

        res.render('home', {
            mapData
        })
        
    }catch (err) {
        console.log(err)
    }
})

router.get('/', async (req,res) => {
    try {
        const Gameinfo = await Players.findAll({
            include: [
                {
                    model: Players,
                    attributes: []
                }
            ]
        })

        res.render('gameData' {
            Gameinfo
        })

    }catch (err) {
        console.log(err)
    }
})

router.get('/', async (req,res) => {
    try {
        const playerRank = await Model.findAll({
            include: [
                {

                }
            ]
        })

        res.render('gameData' {
            playerRank
        })
        
    }catch (err) {
        console.log(err)
    }
})