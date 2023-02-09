const sequelize = require('../config/connection');
const mapData = require('./mapData');
const resourcesData = require('./resourcesData');
const unitsData = require('./unitsData')
const userData = require('./userData')


const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedGallery();
  
    await seedPaintings();
  
    process.exit(0);
  };
  
  seedAll();
  