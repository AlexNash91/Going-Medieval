const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Map extends Model {}

Map.init(
 {
  id: {
    
  }  
 }   
)

module.exports = Map;