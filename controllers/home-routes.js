const router = require('express').Router();
const { Mapset, Players, Tick } = require('../models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// GET request for map on homepage

router.use(bodyParser.json());
let userData

router.get('/', async (req, res) => {
  try {
    const homeData = await Mapset.findAll();

    res.render('home', {
      homeData
    })

  } catch (err) {
    console.log(err)
  }
})

router.get('/login', (req, res) => {
  console.log("i am in GET login")
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }


  try {
    const user = await Players.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Incorrect username.' });
    }
    const hashedPassword = user.hashedPassword;
    const pwMatches = await bcrypt.compare(password, hashedPassword);
    if (!pwMatches) {
      return res.status(401).json({ error: 'Incorrect username or password.' })
    }
    console.log(user, "User")
    userData = user.dataValues;
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = username;
      req.session.logged_in = true;
      return res.status(200).json({ message: 'User logged in successfully.', wood: user.wood, stone: user.stone, iron: user.iron, food: user.food });
    })

  } catch (error) {
    return res.status(500).json({ error: 'Failed to login user.' });
  }
});

router.get('/api/map', async (req, res) => {
  try {
    const gameData = await Mapset.findAll()
    const username = req.session.username
    res.json({ gameData, username })
  } catch (err) {
    console.log(err)
  }
})

router.get('/players', async (req, res) => {
  try {
    const playersData = await Players.findAll()
    res.json(playersData)
  } catch (err) {
    console.log(err)
  }
})

router.patch('/players', async (req, res) => {
  try {
    const updatedPlayers = await Players.update(
      { training: req.body.training },
      { where: { username: req.body.username } }
    )
    res.json(updatedPlayers);
  } catch (err) {
    console.log(error)
    res.status(500).send('Internal Service Error')
  }
})

router.patch('/target', async (req, res) => {
  try {
    const updatedPlayers = await Players.update(
      { targeting: req.body.targeting },
      { where: { username: req.body.username } }
    );
    res.json(updatedPlayers);
  } catch (err) {
    console.log(error)
    res.status(500).send('Internal Service Error')
  }
})

router.patch('/claim', async (req, res) => {
  try {
    const updatedPlayers = await Players.update(
      { penClaim: req.body.penClaim },
      { where: { username: req.body.username } }
    );
    res.json(updatedPlayers);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

router.patch('/targeting', async (req, res) => {
  try {
    const updatedPlayers = await Players.update(
      { targeting: req.body.targeting },
      { where: { username: req.body.username } }
    );
    res.json(updatedPlayers);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

router.patch('/kingdom', async (req, res) => {
  try {
    console.log('req.body:', req.body);
    const updatedPlayers = await Players.update(
      { kingdomTile: req.body.kingdomTile },
      { where: { username: req.body.username } }
    );
    const updatedMapset = await Mapset.update(
      { cas: req.body.cas, own: req.body.own },
      { where: { id: req.body.id } }
    );
    const responseData = {
      updatedPlayers: updatedPlayers,
      updatedMapset: updatedMapset
    };
    res.json(responseData);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

router.patch('/ranks', async (req, res) => {
  try {
    const updatedPlayer = await Players.update(
      { penSol: req.body.penSol },
      { where: { username: req.body.username } }
    );
    res.json(updatedPlayer);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: "Error updating player in the database."
    });
  }
});

router.get('/ranks', async (req, res) => {
  try {
    const playerRank = await Players.findAll()
    res.json(playerRank)
  } catch (err) {
    console.log(err)
  }
})

router.get('/register', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');
});

router.post('/register', async (req, res) => {
  const { username, password, kingdom } = req.body;
  if (!username || !password || !kingdom) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }


  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await new Players({ username, hashedPassword, kingdom });
    await user.save();
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = username;
    });
    return res.status(200).json({ message: 'User registered successfully.' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to register user.' });
  }
});


router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to logout user.' });
    }

    return res.redirect('/');
  });
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      res.redirect('/');
      return;
    });
  } else {
    res.status(404).end();
  }
});

router.get('/game', (req, res) => {
  console.log("please let this be right", userData, "this is User Data");

  res.render('game', { resources: userData });
  // if we can get value of username in this function we can request row from database 
});

router.patch('/targeting', async (req, res) => {
  try {
    const updatedPlayers = await Players.update(
      { targeting: req.body.targeting },
      { where: { username: req.body.username } }
    );
    res.json(updatedPlayers);
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router




