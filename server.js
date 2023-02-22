const tickRate = 30000

const { Op } = require('sequelize');
const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');
// const router = require('express').Router()
const { Mapset, Tick, Players } = require('./models');
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
  setInterval(async () => {
    resolveCombat();
    claimTile();
    genPlayerUnits();
    genPlayerResource();
    genPlayerRank();
    console.log("Reload and Restart");
  }, tickRate);
});

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

    //loops through each player and update the corresponding mapset row
    for (const player of players) {
      const username = player.username;
      const penClaim = player.penClaim;

      if (penClaim === null) {
        continue;
      }

      //finds the corresponding mapset row
      const mapset = await Mapset.findByPk(penClaim);
      if (!mapset) {
        throw new Error(`Mapset with id ${penClaim} not found`);
      }

      //updates the own column of the mapset row
      await mapset.update({
        own: username,
      });
    }

    //sets all penClaim cells to null
    await Players.update({ penClaim: null }, {
      where: { penClaim: { [Op.not]: null } }
    });

    console.log("End Claim!");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

async function resolveCombat () {
  console.log("Begin Attack!");
  try {
    // Find all players with a non-null value in the targeting
    const players = await Players.findAll({
      where: {
        targeting: {
          [Op.not]: null,
        },
      },
    });

    //loops through each player and update the corresponding mapset row
    for (const player of players) {
      const username = player.username;
      const penClaim = player.penClaim;

      //finds the corresponding mapset row
      const mapset = await Mapset.findByPk(penClaim);
      if (!mapset) {
        throw new Error(`Mapset with id ${penClaim} not found`);
      }

      //updates the own column of the mapset row
      await mapset.update({
        own: username,
      });
    }

    //sets all penClaim cells to null
    await Players.update({ penClaim: null }, {
      where: { penClaim: { [Op.not]: null } }
    });

    console.log("End Claim!");
  } catch (err) {
    console.log(err);
    throw err;
  }
};

async function genPlayerUnits() {
  console.log("Begin generating units!")
  try {
    const players = await Players.findAll({
      where: {
        training: {
          [Op.not]: null,
        },
      },
    });
    for (const player of players) {
      const { training } = player;
      if (training.includes("soldier")) {
        await player.increment("soldiers");
        await player.decrement("food", { by: 5 });
        await player.decrement("stone");
      }
      if (training.includes("knight")) {
        await player.increment("knights");
        await player.decrement("food", { by: 5 });
        await player.decrement("iron");
      }
      if (training.includes("archer")) {
        await player.increment("archers");
        await player.decrement("food", { by: 5 });
        await player.decrement("wood");
      }
      await player.update({ training: null });
    }

    console.log("Units generated successfully!")
  } catch (err) {
    console.error("Error generating units:", err);
  }
}


async function genPlayerResource() {
  console.log("Begin generating resources!")
  const players = await Players.findAll();
  for (const player of players) {
    const { archers, soldiers, knights } = player;
    const updatedPlayer = {
      ATK: player.ATK + archers * 5 + soldiers * 2 + knights * 3,
      DEF: player.DEF + archers * 1 + soldiers * 1 + knights * 5,
      HP: player.HP + archers * 1 + soldiers * 4 + knights * 3,
    };
    await player.update(updatedPlayer);
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

// async function attack() {
// //   //  gets ATK from Mapset

// // Where targeting is not null subtract that usernams ATK from the targeting's ID tile's HP
// // if targetings tiles HP is =< 0 kill player
// // kill player null all values of player row

// console.log("Attacking")
// const players = await Players.findAll({
//   where: { targetting: { [Op.not]: null } }
// })
// for (player of players) {
//   const maps = await Mapset.findAll({
//     where: { id: players.targetting }
//   })
//   for (map of maps) {
//     const rival = await Players.findOne({
//       where: {username: maps.own}
//     })
//     if (player.ATK > rival.DEF + rival.HP) {
//       console.log("You Died")
//       await Players.update({} {
//         where: { penClaim: { [Op.not]: null } }
//       });
//     }
//   }
  

// }


  
//   // Player ATK must be higher than opponents HP + DEF
//   // determines a winner

  let ATK = "your ATK"
  let HP = "opponents HP"
  let DEF = "opponents DEF"

  if (ATK > HP + DEF ) {
      console.log("You win!")
  }
  else {
    console.log("You Lose")
  }

//   // PATCH request updates tile assignment
//   //     fetch('/api/map', {
//   //         method: 'PATCH',
//   //         headers: {
//   //           'Content-Type': 'application/json'
//   //         },
//   //         body: JSON.stringify({ id:, own:  })
//   //       })
//   //         .then(res => res.json())
//   //         .then(data => console.log(data))
//   //         .catch(error => console.error(error));
