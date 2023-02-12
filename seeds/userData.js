const { User } = require('../models');

const userData = [
{
username: 'johncrally',
password: 'brulegrool',
},
{
username: 'crisscross',
password: 'crosscriss',
},
{
username: 'dagnabbit',
password: 'butteredcorn'
},
{
username: 'aggrocrag',
password: 'aggthatcrag',
},
{
username: 'DaKing',
password: 'royalty',
},
];
const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;