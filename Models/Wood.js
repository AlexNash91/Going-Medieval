const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Wood extends Model {}

Wood.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wood_count: {
    type: DataTypes.INTEGER,
    allowNull:false,    
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "wood", 
  }
);
module.exports= Wood;