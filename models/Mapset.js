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
            defaultValue: "field",
        },
        cas: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        defSpr: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "field",
        },
        res: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "food",
        },
        own: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: "Mapset",
        timestamps: false,
    },
);

module.exports = Mapset;
