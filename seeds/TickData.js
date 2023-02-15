const { Tick } = require('../models');

const TickData = [
    {
        id: 1,
        timer: null,
    },
];
const seedTick = () => Tick.bulkCreate(TickData);
module.exports = seedTick;


