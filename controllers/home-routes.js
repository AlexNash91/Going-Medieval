const router = require('express').Router();
const { Mapset, Players, User } = require('../models');
const bodyParser = require('body-parser');
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
    try {
      const userData = await User.findOne({ where: { username: req.body.username } });
  
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      const validPassword = await userData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
  
        res.json({ user: userData, message: 'You are now logged in!' });
      });
  
    } catch (err) {
      res.status(400).json(err);
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

router.patch('/gpatch', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Create a new user
    const claim = new Mapset({});
    await Mapset.update();

    // Store the user ID in the session
    req.session.userId = user._id;

    return res.status(200).json({ message: 'Tile claimed successfully.' });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to register user.' });
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
  const { username, password } = req.body;
  
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    // Create a new user
    const user = new User({ username, password });
    await user.save();

    // Store the user ID in the session
    req.session.userId = user._id;

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




