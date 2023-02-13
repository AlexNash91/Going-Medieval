const { User } = require('../models');

const userData = [
{
username: 'johncrally',
password: 'brulegrool',
kingdom: 'Brules Abode'
},
{
username: 'crisscross',
password: 'crosscriss',
kingdom: 'Cross Castle'
},
{
username: 'dagnabbit',
password: 'butteredcorn',
kingdom: 'Montana Manor'
},
{
username: 'aggrocrag',
password: 'aggthatcrag',
kingdom: 'Cragula Castle'
},
{
username: 'DaKing',
password: 'royalty',
kingdom: 'Kings Cross'
},
];
const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;