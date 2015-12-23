var mysql = require('mysql');
// var connection = mysql.createConnection(process.env.JAWSDB_URL);
var connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);

connection.connect();

// connection.query('CREATE TABLE Persons(PersonID int, LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255));')

// connection.query('INSERT INTO Persons (PersonID, LastName, FirstName, Address, City) VALUES ("1", "Lin", "Irvin", "moonbeam", "SG");', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows);
// });

connection.query('SELECT * FROM Persons', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows);
});

connection.end();