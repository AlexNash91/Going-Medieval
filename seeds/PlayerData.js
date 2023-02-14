const { Players } = require('../models');

const PlayerData = [

    {
        username: 'johncrally',
        kingdom: 'Brules Abode',
        wood: '100',
        stone: '200',
        iron: '50',
        food: '25',
        archers: 0,
        soldiers: 0,
        knights: 0,
        penSol: false,
        penArc: false,
        penKni: false,
    },
    {
        username: 'crisscross',
        kingdom: 'Cross Castle',
        wood: '200',
        stone: '300',
        iron: '100',
        food: '50',
        archers: 0,
        soldiers: 0,
        knights: 0,
        penSol: false,
        penArc: false,
        penKni: false,

    },
    {
        username: 'dagnabbit',
        kingdom: 'Montana Manor',
        wood: '300',
        stone: '400',
        iron: '200',
        food: '100',
        archers: 0,
        soldiers: 0,
        knights: 0,
        penSol: false,
        penArc: false,
        penKni: false,
    },
    {
        username: 'aggrocrag',
        kingdom: 'Cragula Castle',
        wood: '500',
        stone: '400',
        iron: '400',
        food: '150',
        archers: 0,
        soldiers: 0,
        knights: 0,
        attacking: null,
        defending: null,
        penSol: false,
        penArc: false,
        penKni: false,
    },
    {
        username: 'DaKing',
        kingdom: 'Kings Cross',
        wood: '700',
        stone: '500',
        iron: '500',
        food: '300',
        archers: 0,
        soldiers: 0,
        knights: 0,
        penSol: false,
        penArc: false,
        penKni: false,
    }
];
const seedPlayers = () => Players.bulkCreate(PlayerData);
module.exports = seedPlayers;


