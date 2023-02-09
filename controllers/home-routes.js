const router = require('express').Router();
const { Map } = require('../models');

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