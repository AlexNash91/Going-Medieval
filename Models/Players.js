const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Players extends Model {}

Players.init(
{
id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,    
},

name:{
  type: DataTypes.STRING,
  allowNull:false,
},
kingdom: {
type: DataTypes.STRING,
allowNull: false,    
},
ranking: {
type: DataTypes.INTEGER,
allowNull:false,
},
wood: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Wood',
      key: 'wood_count',
    },
  },
stone: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Stone',
      key: 'stone_count',
    },   
},
iron: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Iron',
      key: 'iron_count',
    },    
},
food: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Food',
      key: 'food_count',
    },    
},
coin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Coin',
      key: 'coin_count',
    },    
},  
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "players",   
}    
);
module.exports= Players;

