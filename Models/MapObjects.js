const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MapObjects extends Model {}

MapObjects.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,   
    },
    archery_range: {
    type: DataTypes.INTEGER,
    allowNull: false,    
    },
    barracks: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    bridge: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    castle: {
        type: DataTypes.INTEGER,
    allowNull: false, 
    },
    castle: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    tree: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    house: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    lumber_mill: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    market: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    mine: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    mountain: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    wall: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    wall_gate: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    wall_gate_closed: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    wall_straight: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    watch_tower: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    water_mill: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    well: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "MapObjects",
},   
);
module.exports = MapObjects;