const sequelize = require('../config/connection');
const userData = require('./userData')
const playerData = require('./PlayerData')
const MapSetData = require ('./MapSetData')

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await userData();
    await playerData();  
   await MapSetData();
    process.exit(0);
  };
  
  seedAll();
  