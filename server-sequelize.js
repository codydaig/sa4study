var express = require('express')
var bodyParser = require('body-parser');
var jade = require('jade');

var db = require('./sequelize');


var Robots = require('./app/collections/robot');
var Robot = require('./app/models/robot');

var app = express();
//router??
// var router  = express.Router();

// app.set('view engine', 'jade');
app.set('robots', __dirname + '/api/robots');
app.use(express.static(__dirname + 'public'));

app.set('port', 3000);

//returns all bots
router.get('/robots', function(req, res) {
  Bots.findAll({
    include: [ walker ]
  }).then(function(bots) {
    res.render('/robots', {
      walker: bots
    });
  });
});

//create new bot
app.post('/robots', function(req, res) {
  new Bots({ walker: req.body.walker}).fetch().then(function(found) {
    if (found) {
      res.status(200).send(found.attributes);
    } else {
        Bots.create({
          walker: req.body.walker
        }).then(function() {
          res.redirect('/robots');
        });
    }
  });
})

//returns single bot
app.get('/robots:id', function(req, res) {
  Bots.findOne({
    where: { id: req.body.id },
    include: [req.body.walker],
  }).then(function() {
    res.redirect('/robots');
  });
})

//update existing bot
app.put('/robots:id', function(req, res) {
  // Bots.save({walker},
  Bots.update({walker},
    //not sure if where: is needed
    where: {
      id: req.body.id
    })
  .then(function([rows, instances]){
    console.log(rows);
    res.redirect('/robots:id');
})

//delete existing bot
app.delete('/robots:id', function(req, res) {
  Bots.destroy({
    where: {
      id: req.body.id
    }
  }).then(function([rows, instances]) {
    console.log(rows);
    res.redirect('/robots:id');
  });
})


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on http://localhost:' + port);