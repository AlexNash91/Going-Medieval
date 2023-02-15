const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tick extends Model { }

Tick.init(
    {
        timer: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: "Tick",
    }
);

module.exports = Tick;
