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
            allowNull: false,
        },
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wood: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stone: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        iron: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        food: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        archers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        soldiers: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        knights: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attacking: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        defending: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
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

