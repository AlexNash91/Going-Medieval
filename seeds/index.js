const sequelize = require('../config/connection');
const PlayerData = require('./PlayerData')
const MapSetData = require('./MapSetData')
const TickData = require('./TickData')
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await PlayerData();
  await MapSetData();
  await TickData();
  process.exit(0);
};

seedAll();
