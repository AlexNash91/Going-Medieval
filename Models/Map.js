const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Map extends Model {}

Map.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    map_one: {
      type: DataTypes.STRING,
      allowNull: false,
      // autoIncrement: true,
    },
    map_two: {
      type: DataTypes.STRING,
      allowNull: false,
      // autoIncrement: true,
    },
    map_three: {
      type: DataTypes.STRING,
      allowNull: false,
      // autoIncrement: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "map",
  }
);

module.exports = Map;
