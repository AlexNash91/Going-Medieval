const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Stone extends Model {}

Stone.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    stone_count: {
    type: DataTypes.INTEGER,
    allowNull:false,    
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "stone", 
  }
);
module.exports= Stone;