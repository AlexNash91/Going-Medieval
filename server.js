const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');
const router = require('express').Router()
const {Mapset} = require('./Models')

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

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

router.get('/api/map', (res, req) => {
  Mapset.findAll({})
  .then(data => {
      res.json(JSON.parse(data))
  }) 
})


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


//server tick  Commented for now
// setInterval(() => {
//     //change to correct table_name and column_name
//   connection.query('SELECT * FROM table_name', (error, results) => {
//     if (error) {
//       console.error(error);
//     } else {
//       results.forEach(row => {
//         // Update logic
//         connection.query('UPDATE table_name SET column_name = ? WHERE id = ?', [newValue, row.id], (error, results) => {
//           if (error) {
//             console.error(error);
//           }
//         });
//       });
//     }
//   });
// }, 30000); // 30 seconds in milliseconds  - set higher for production.


