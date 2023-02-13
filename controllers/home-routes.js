const router = require('express').Router();
const { Mapset, Players, User } = require('../models');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
// GET request for map on homepage

router.use(bodyParser.json());

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
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const user = await User.findOne({ where: {username} });
    if (!user) {
      return res.status(401).json({ error: 'Incorrect username.' });
    }

    const pw = await User.findOne({ where: {password}});
    if (!pw) {
     return res.status(401).json({error: 'Incorrect password'}) 
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;

    return res.status(200).json({ message: 'User logged in successfully.' });
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
  const { username, password, kingdom } = req.body;
  
  if (!username || !password || !kingdom) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    const user = new User({username, password, kingdom});
    await user.save();

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.username = user.username;
      req.session.logged_in = true;
    });

    return res.status(200).json({ message: 'User registered successfully.' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to register user.' });
  }
});
  
  router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

  router.get('/game', (req, res) => {
    
    res.render('game');
});

module.exports = router




