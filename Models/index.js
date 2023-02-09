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

Players.hasMany(Resources, {
    foreignKey: 'resource_id',
    onDelete: 'CASCADE',
  });

module.exports = { User, Map, Wood, Stone, Iron, Food, Coin, Units, MapTiles, Players};
