const tickRate = 5000
let countdownIntervalId;
let isCountingDown = false;

const { Op } = require('sequelize');
const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');
// const router = require('express').Router()
const { Mapset, Tick, Players } = require('./Models');
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
    maxAge: 24 * 60 * 60 * 1000
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

  // Set up the first interval to update the timeRemaining field

 // Set up the second interval to update the tickRate field
  setInterval(async () => {
    resolveCombat();
    claimTile();
    genPlayerUnits();
    genPlayerResource();
    genPlayerRank();
    console.log("Reload and Restart");
    // countDown();
    // Update the tickRate field to its new value
    await Tick.update({ timer: tickRate }, { where: { id: 1 } });
  }, tickRate);
});

async function countDown() {
  if (isCountingDown) {
    // If an interval is already running, return without doing anything
    return;
  }

  let startTime = Date.now();
  // Call this function every 1000ms
  countdownIntervalId = setInterval(() => {
    let elapsedTime = Date.now() - startTime;
    let timeRemaining = tickRate - elapsedTime;
    console.log(timeRemaining);

    Tick.update({ timer: timeRemaining }, { where: { id: 1 } });
    if (timeRemaining <= 0) {
      clearInterval(countdownIntervalId);
      countdownIntervalId = null;
      isCountingDown = false;
      return; // Reset the flag and return
    }
  }, 1000);

  isCountingDown = true;
}


async function resolveCombat() {
  console.log("Begin Combat!")
  console.log("End Combat!")
}

async function genPlayerUnits() {
  console.log("Begin Combat!")
  console.log("End Combat!")
}

async function claimTile () {
  console.log("Begin Claim!");
  try {
    // Find all players with a non-null value in the penClaim column
    const players = await Players.findAll({
      where: {
        penClaim: {
          [Op.not]: null,
        },
      },
    });

    // Loop through each player and update the corresponding mapset row
    for (const player of players) {
      const username = player.username;
      const penClaim = player.penClaim;

      // Find the corresponding mapset row
      const mapset = await Mapset.findByPk(penClaim);
      if (!mapset) {
        throw new Error(`Mapset with id ${penClaim} not found`);
      }

      // Update the own column of the mapset row
      await mapset.update({
        own: username,
      });
    }

    // Set all penClaim cells to null
    await Players.update({ penClaim: null }, {
      where: { penClaim: { [Op.not]: null } }
    });

    console.log("End Claim!");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

async function genPlayerResource() {
  console.log("Begin generating resources!")
  const mapsets = await Mapset.findAll();
  for (const mapset of mapsets) {
    const player = await Players.findOne({
      where: { username: mapset.own },
    });
    if (player) {
      await player.increment(mapset.res, { by: 1 });
    }
  }
  console.log("End generating resources!")
}

async function genPlayerRank() {
  console.log("Begin calculating ranks!")
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

    await player.update({ ranking });
    console.log("End calculating ranks!")
  }
}