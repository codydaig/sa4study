var express = require('express')
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
// var jade = require('jade');
var app = express();
var mdb = require('./db/orm-sequelize.js');


//router?? middleware/nesting array handler
// var router  = express.Router();

// app.set('view engine', 'jade');
// app.set('robots', __dirname + '/api/robots');
// app.use(express.static(__dirname + 'public'));

app.set('port', 3000);

// returns all bots

app.get('/robots', function(req, res) {
  console.log(req)
    // mdb.Bots.findAll({ where: {walker: 'Zool'} });
  mdb.Bots.findAll({ attributes: ['walker'] })
    .then(function(bots) {
      res.json(bots);
      // res.render('/robots', {
      //   walker: bots
      // });
      // res.end("<html><body><form action='/' method='post'><input type='text' walker='hello'><input type='submit'></form></body></html>");
    });
});

// app.get('/robots', function(req, res) {
// console.log(req.IncomingMessage)
//   mdb.Bots.findAll({ where: {walker: 'Jean Valjean'}  });
//       // walkers.forEach(function(walkers) {
//       //   console.log(walkers.walker + ' exists');
//       // });
// });

// app.post('/robots', function(req, res) {
//   // console.log(req.statusMessage);
//   // mdb.Bots.create(req.statusMessage);
//   mdb.Bots.create({attributes:  [req.statusMessage]});
// })

//create new bot
app.post('/robots', function(req, res) {
  console.log('req.body ',req)
  // console.log('res.body ',res.body)
  // mdb.Bots.findAll({ attributes:  [ 'walker' ]})
  // .then(function(found) {
    mdb.Bots.create({
          "walker": req.body
        }).then(function() {
          res.redirect('/robots');
    });
  // });
})



// app.post('/robots', function(req, res) {
//   mdb.Bots.findOrCreate({ attributes: { 'walker': req.body.walker } })
//     // findOrCreate returns multiple resutls in an array
//     // use spread to assign the array to function arguments
//     .spread(function(walker, created) {
//       db.Bots.create({
//         // id: Bots.get('id'),
//         'walker': req.body.walker
//       }).then(function(data) {
//         res.sendStatus(201);
//       });
//     });
// })

// //returns single bot
app.get('/robots/:id', function(req, res) {
  consol.log('/robots/:id', req)
  mdb.Bots.findOne({
    where: { id: req.params.id },
    include: [req.body.walker]
  }).then(function() {
    res.redirect('/robots');
  });
})

// //update existing bot
app.put('/robots/:id', function(req, res) {
  // Bots.save({walker},
  mdb.Bots.update({
    where: { id: req.params.id },
    include: [req.body.walker]
  }).then(function([rows, instances]) {
    console.log(rows);
    res.redirect('/robots/:id');
  })
})

// //delete existing bot
app.delete('/robots/:id', function(req, res) {
  mdb.Bots.destroy({
    where: { id: req.params.id },
    include: [req.body.walker]
  }).then(function([rows, instances]) {
    console.log(rows);
    res.redirect('/robots:id');
  });
})


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on http://localhost:' + port);
