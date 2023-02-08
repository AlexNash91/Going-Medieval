const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Units extends Model {}

Units.init(
{
    id: {
        
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,  
    },
}    
)