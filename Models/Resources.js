const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Resources extends Model {}

Resources.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wood: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    stone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    iron: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    coin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    food: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Resources",
  }
);
module.exports = Resources;
