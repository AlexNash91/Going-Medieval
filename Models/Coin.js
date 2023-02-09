const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Coin extends Model {}

Coin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    coin_count: {
    type: DataTypes.INTEGER,
    allowNull:false,    
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "coin", 
  }
);
module.exports= Coin;