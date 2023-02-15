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
        wood: '2',
        stone: '3',
        iron: '1',
        food: '5',
        archers: 1,
        soldiers: 2,
        knights: 3,

    },
    {
        username: 'dagnabbit',
        password: 'butteredcorn',
        kingdom: 'Montana Manor',
        kingdomTile: 47,
        wood: '3',
        stone: '4',
        iron: '2',
        food: '5',
        archers: 3,
        soldiers: 2,
        knights: 1,
    },
];
const seedPlayers = () => Players.bulkCreate(PlayerData);
module.exports = seedPlayers;
