const express = require("express");
const app = express();
const sql = require("mysql");
const session = require("express-session");
const routes = require("./controllers");
const exphbs = require("express-handlebars");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const PORT = process.env.PORT || 3001;

const connection = sql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connection.connect();

const sess = {
  secret: "Secret Sauce",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

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
const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
