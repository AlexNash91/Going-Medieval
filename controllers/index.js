const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/', homeRoutes);
router.use(/login)

module.exports = router;