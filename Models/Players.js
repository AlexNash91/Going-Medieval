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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
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
            defaultValue: 50
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
        targeting: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        penClaim: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        training: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ATK: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        DEF: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        HP: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: "Players",
    }
);

module.exports = Players;