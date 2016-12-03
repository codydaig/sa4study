var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Robots'
});

var app = express();

connection.connect(function(err) {
  if (!err) {
    console.log(connection.database, "is connected");
  } else {
    console.log("Error connecting ", connection.database);
  }
});

app.get('/robots', function(req, res) {
  connection.query('SELECT * from bots', function(err, rows, fields) {
    connection.end();
    if (!err)
      console.log(rows, 'Lot of Robots');
    else
      console.log('Error while performing Query.');
  });
});

app.post('/', function(req, res) {
  var walker = req.body.walker;
  connection.query('INSERT INTO bots (walker) VALUES (' + req.body.walker + ');', function(err, rows, fields) {
    connection.end();
    if (!err)
      console.log(rows, 'is alive');
    else
      console.log('Error while performing Query.');
  });
})

app.get('/robots:id', function(req, res) {
  connection.query('SELECT walker FROM bots WHERE id = ' + req.body.id + ')', function(err, rows, fields) {
    connection.end();
    if (!err)
      console.log(rows, 'Lot of Robots');
    else
      console.log('Error while performing Query.');
  });
})

app.put('/robots:id', function(req, res) {
  var walker = req.body.walker;
  res.send('/robots:id');
  connection.query('UPDATE bots SET walker = ' + req.body.walker + ' WHERE id = ' + req.body.id + ',{id: ' + req.body.id + ', walker: ' + req.body.walker + '})', function(err, rows, fields) {
    connection.end();
    if (!err)
      console.log(rows, 'is alive');
    else
      console.log('Error while performing Query.');
  });
})

app.delete('/robots:id', function(req, res) {
  res.send('/robots:id');
  connection.query('DELETE FROM bots WHERE id ='  + req.body.id + ')', function(err, rows, fields) {
    connection.end();
    if (!err)
      console.log(rows, 'is alive');
    else
      console.log('Error while performing Query.');
  });
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on http://localhost:' + port);
