const router = require('express').Router();
const { Mapset, Players} = require('../models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
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
  console.log("I am in POST login")
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const user = await Players.findOne({ where: {username} });
    if (!user) {
      return res.status(401).json({ error: 'Incorrect username.' });
    }

    const pw = await Players.findOne({ where: {password}});
    if (!pw) {
     return res.status(401).json({error: 'Incorrect password'}) 
    }
    console.log(user, "User")
    userData = user.dataValues;
    req.session.save(() => {
      req.session.user_id = user.id;
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
        res.json(gameData)
    } catch (err) {
        console.log(err)
    }
})

router.patch('/api/map', async (req, res) => {
  try {
    const updatedMapset = await Mapset.update(
      { own: req.body.own },
      { where: { id: req.body.id } }
    );
    res.json(updatedMapset);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: "Error updating mapset in the database."
    });
  }
});

// ranks path
router.patch('/ranks', async (req, res) => {
  try {
    const updatedPlayer = await Players.update(
      { penSol: req.body.penSol },
      // getting a 500 error when adding this?
      // { penArc: req.body.penSol},
      // { penKni: req.body.prenKni},
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

router.get('/register', async (req,res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;   
    }

    res.render('register');
});

router.post('/register', async (req, res) => {
  const {username, password, kingdom} = req.body;
  if (!username || !password || !kingdom) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const user = await new Players({username, password, kingdom});
    await user.save();
    req.session.save(() => {
    req.session.user_id = user.id;
  });
    return res.status(200).json({message: 'User registered successfully.' });
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
    
    res.render('game', { resources : userData});    
    // if we can get value of username in this function we can request row from database 
});

module.exports = router




