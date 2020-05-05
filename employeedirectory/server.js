// require mysql
const mysql = require('mysql');

// estalish connection with the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'react_employee_db',
});

// testing the connection (5/4/20: connection is good)
// connection.connect(function(err) {
//   if(err) throw err;
//   console.log("connected as id " + connection.threadId);
//   connection.end();
// });

// testing a query
// connection.query("SELECT * FROM employee;", (err, results) => {
//   if(err) throw err;
//   console.log(JSON.stringify(results, null, 2));
//   connection.end();
// });