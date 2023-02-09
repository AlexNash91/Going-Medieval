const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MapSet extends Model {}

MapSet.init(
{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,  
  },
  field: {
type: DataTypes.INTEGER,
allowNull: false,
  },
  forest: {
 type: DataTypes.INTEGER,
 allowNull: false,
  },
  rock: {
type: DataTypes.INTEGER,
allowNull: false,
  },  
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "mapset",  
}    
)
module.exports = MapSet;