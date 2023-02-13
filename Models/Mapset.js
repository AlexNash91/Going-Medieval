const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Mapset extends Model { }

Mapset.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        x: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        y: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spr: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        def: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        res: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        own: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        soldiers: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        archers: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        knights: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ATK: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        DEF: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        HP: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "Mapset",
        timestamps: false
    },
);

module.exports = Mapset;
