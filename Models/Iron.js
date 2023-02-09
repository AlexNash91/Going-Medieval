const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Iron extends Model {}

Iron.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    iron_count: {
    type: DataTypes.INTEGER,
    allowNull:false,    
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "iron", 
  }
);
module.exports= Iron;