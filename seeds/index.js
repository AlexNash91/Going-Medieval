const sequelize = require('../config/connection');
const mapData = require('./mapData');
const resourcesData = require('./resourcesData');
const unitsData = require('./unitsData')
const userData = require('./userData')
const playerData = require('./PlayerData')


const seedAll = async () => {
    await sequelize.sync({ force: true });

    await playerData();
   await userData();
    process.exit(0);
  };
  
  seedAll();
  