const tickRate = 5000

const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');
// const router = require('express').Router()
const { Mapset, Players } = require('./Models');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
// const config = require('../config/connection');



const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {
  maxAge: 30*24*60*60
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)


const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
  setInterval(async () => {
    console.log("Tick!");
    updatePlayerResource();
    updatePlayerRank();
  }, tickRate);
});

async function updatePlayerResource() {
  const mapsets = await Mapset.findAll();
  for (const mapset of mapsets) {
    const player = await Players.findOne({
      where: {username: mapset.own },
    });
    if (player) {
      await player.increment(mapset.res, { by: 1 });
    }
  }
}


async function updatePlayerRank() {
  const players = await Players.findAll();
  for (const player of players) {
    const {
      wood,
      stone,
      iron,
      food,
      archers,
      soldiers,
      knights
    } = player;
    
    const ranking = wood + stone + iron + food + archers + soldiers + knights;

    await player.update({ranking});
  }
}
