const { Players } = require('../models');

const PlayerData = [

    {
        username: 'johncrally',
        password: 'brulegrool',
        kingdom: 'Brules Abode',
    },
    {
        username: 'crisscross',
        password: 'crosscriss',
        kingdom: 'Cross Castle',
        kingdomTile: 13,
        wood: '200',
        stone: '300',
        iron: '100',
        food: '50',
        archers: 0,
        soldiers: 0,
        knights: 0,

    },
    {
        username: 'dagnabbit',
        password: 'butteredcorn',
        kingdom: 'Montana Manor',
        kingdomTile: 47,
        wood: '300',
        stone: '400',
        iron: '200',
        food: '100',
        archers: 0,
        soldiers: 0,
        knights: 0,
    },
];
const seedPlayers = () => Players.bulkCreate(PlayerData);
module.exports = seedPlayers;


