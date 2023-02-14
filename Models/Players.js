const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Players extends Model { }

Players.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kingdom: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        kingdomTile: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        wood: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        stone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        iron: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        food: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        archers: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        soldiers: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        knights: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        attacking: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        defending: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        penSol: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        penArc: {type: 
            DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        penKni: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: "Players",
    }
);

module.exports = Players;

