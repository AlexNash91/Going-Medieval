const router = require('express').Router();
const { Mapset, Players, User } = require('../models');

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

router.get('/ranks ', async (req, res) => {
    try {
        const playerRank = await Players.find({},
            {attributes: ['name','kingdom','ranking']
        })
        res.json(playerRank)
    } catch (err) {
        console.log(err)
    }
})

// router.get('/login', async (req, res) => {
//     try {
//         const login = await User.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['username', 'password']
//                 }
//             ]
//         })
//     } catch(err) {
//         console.log(err)
//     }
// })
module.exports = router




