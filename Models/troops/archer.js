const { DataTypes } = require('sequelize')
const Units = require('./units')

class Archer extends Units {
    constructor(ATK, DEF, HP) {
        ATK = 12
        DEF = 2
        HP = 15
    }
}

Archer.init(
    {
        ATK: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        DEF: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        HP: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
    }
)

module.exports = Archer