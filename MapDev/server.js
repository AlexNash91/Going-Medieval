const express = require('express');
const app = express();
const sql = require('mysql');

const connection = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootroot',
  database: 'medieval_db'
});

connection.connect();

app.listen(3001, () => {
  console.log('Server running on port 3001');
});