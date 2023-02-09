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

Players.hasOne(Wood, {
foreignKey: 'wood_count',    
});

Players.hasOne(Stone, {
foreignKey: 'stone_count',    
});

Players.hasOne(Iron, {
foreignKey: 'iron_count'    
});
Players.hasOne(Food, {
foreignKey: 'food_count',    
});

Players.hasOne(Coin, {
foreignKey: 'coin_count'    
});

module.exports = { User, Map, Wood, Stone, Iron, Food, Coin, Units, MapTiles, Players};
