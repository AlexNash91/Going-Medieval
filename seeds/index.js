const sequelize = require('../config/connection');
const playerData = require('./PlayerData')
const MapSetData = require ('./MapSetData')
const TickData = require ('./TickData')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await playerData();
   await MapSetData();
   await TickData();
    process.exit(0);
  };
  
  seedAll();
  