const { Players } = require('../models');

const PlayerData = [

    {
        username: 'johncrally',
        password: 'brulegrool',
        kingdom: 'Brules Abode',
        ranking: '5',
        wood: '100',
        stone: '200',
        iron: '50',
        food: '25',
        archers: 0,
        soldiers: 0,
        knights: 0,
        attacking: null,
        defending: null,

    },
    {
        username: 'crisscross',
        password: 'crosscriss',
        kingdom: 'Cross Castle',
        ranking: '4',
        wood: '200',
        stone: '300',
        iron: '100',
        food: '50',
        archers: 0,
        soldiers: 0,
        knights: 0,
        attacking: null,
        defending: null,

    },
    {
        username: 'dagnabbit',
        password: 'butteredcorn',
        kingdom: 'Montana Manor',
        ranking: '3',
        wood: '300',
        stone: '400',
        iron: '200',
        food: '100',
        archers: 0,
        soldiers: 0,
        knights: 0,
        attacking: null,
        defending: null,

    },
    {
        username: 'aggrocrag',
        password: 'aggthatcrag',
        kingdom: 'Cragula Castle',
        ranking: '2',
        wood: '500',
        stone: '400',
        iron: '400',
        food: '150',
        archers: 0,
        soldiers: 0,
        knights: 0,
        attacking: null,
        defending: null,
    },
    {
        username: 'DaKing',
        password: 'royalty',
        kingdom: 'Kings Cross',
        ranking: '1',
        wood: '700',
        stone: '500',
        iron: '500',
        food: '300',
        archers: 0,
        soldiers: 0,
        knights: 0,
        attacking: null,
        defending: null,
    }
];
const seedPlayers = () => Players.bulkCreate(PlayerData);
module.exports = seedPlayers;


