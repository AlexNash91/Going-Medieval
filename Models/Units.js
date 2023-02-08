const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Units extends Model {}

Units.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    foot_soldier: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    heavy_soldier: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mounted_soldier: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rogue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    archer: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "units",
  }
);
module.exports = Units;
