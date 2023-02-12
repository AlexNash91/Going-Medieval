const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');
// const router = require('express').Router()
const { Mapset, Player, Players } = require('./Models');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
// const config = require('../config/connection');



const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
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
  }, 1000);
});

async function updatePlayerResource() {
  const mapsets = await Mapset.findAll();
  for (const mapset of mapsets) {
    const player = await Players.findOne({
      where: { name: mapset.own },
    });
    if (player) {
      await player.increment(mapset.res, { by: 1 });
    }
  }
}



