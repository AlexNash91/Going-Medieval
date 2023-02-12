const router = require('express').Router();

const homeRoutes = require('./home-routes');
// const userRoutes = require('./user-routes');

// router.use('/users', userRoutes);
router.use('/', homeRoutes);


module.exports = router;