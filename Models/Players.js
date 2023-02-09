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
    
  },
stone: {
    type: DataTypes.INTEGER,
    allowNull: false,    
},
iron: {
    type: DataTypes.INTEGER,
    allowNull: false,      
},
food: {
    type: DataTypes.INTEGER,
    allowNull: false,        
},
coin: {
    type: DataTypes.INTEGER,
    allowNull: false,    
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

