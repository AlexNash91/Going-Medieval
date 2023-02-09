const User = require('./User');
const Map = require('./Map');
const Wood = require('./Wood');
const Stone = require('./Stone');
const Iron = require('./Iron');
const Food = require('./Food');
const Coin = require('./Coin');
const Units = require('./Units');
const MapTiles = require('./MapTiles');
const Players = require('./Players');

Wood.hasOne(Players);
Players.belongsTo(Wood, {
foreignKey: 'wood_count',    
});

Stone.hasOne(Players);
Players.belongsTo(Stone, {
foreignKey: 'stone_count',    
});

Iron.hasOne(Players);
Players.belongsTo(Iron, {
foreignKey: 'iron_count'    
});

Food.hasOne(Players);
Players.belongsTo(Food, {
foreignKey: 'food_count',    
});

Coin.hasOne(Players);
Players.belongsTo(Coin, {
foreignKey: 'coin_count'    
});

module.exports = { User, Map, Wood, Stone, Iron, Food, Coin, Units, MapTiles, Players};
