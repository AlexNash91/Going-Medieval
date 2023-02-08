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

app.listen(3001, () => {
  console.log('Server running on port 3001');
});