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
      model: 'wood',
      key: 'wood_count',
    },
  },
stone: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'stone',
      key: 'stone_count',
    },   
},
iron: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'iron',
      key: 'iron_count',
    },    
},
food: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'food',
      key: 'food_count',
    },    
},
coin: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'coin',
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

