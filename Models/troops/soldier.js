const Units = require('./units')

class Soldier extends Units {
    constructor(ATK, DEF, HP) {
        ATK = 10
        DEF = 4
        HP = 25
    }
}

Soldier.init(
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

module.exports = Soldier