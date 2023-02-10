const router = require('express').Router();
const { Mapset, Players } = require('../models');

// GET request for map on homepage
router.get('/', async (req, res) => {
    try {
        const homeData = await Mapset.findAll();

        res.render('home', {
            homeData
        })

    } catch (err) {
        console.log(err)
    }
})

router.get('/api/map', async (req, res) => {
    try {
        const gameData = await Mapset.findAll()
        res.json(gameData)
    } catch (err) {
        console.log(err)
    }
})

router.get('/Ranks ', async (req, res) => {
    try {
        const playerRank = await Players.findAll({
            include: [
                {
                    model: Players,
                    attributes: ['name', 'kingdom', 'ranking']
                }
            ]
        })

        res.render('playerRank', {
            playerRank
        })

    } catch (err) {
        console.log(err)
    }
})

module.exports = router