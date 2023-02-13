const Units = require('./units')

class Knight extends Units { }
    

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