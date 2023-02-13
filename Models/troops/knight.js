const Units = require('./units')

class Knight extends Units {
    constructor(ATK, DEF, HP) {
        ATK = 15
        DEF = 7
        HP = 50
    }
}

Knight.init(
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

module.exports = Knight