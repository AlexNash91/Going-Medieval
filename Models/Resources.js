const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Resources extends Model {}

Resources.init (
{
 id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
wood: {

},
stone: {

},
iron: {

},
coin: {

},
  }      
)