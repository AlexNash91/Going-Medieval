const User = require('./User');
const Players = require('./Players');
const Mapset = require('./Mapset')

User.hasMany(Players);
Players.belongsTo(User);


module.exports = { User, Players, Mapset, };
