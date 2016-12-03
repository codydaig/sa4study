var Sequelize = require('sequelize');
var db = new Sequelize('Robots', 'root', '');


var Bots = db.define('bots', {
  walker: Sequelize.STRING
});

// Bots.belongsTo(Bots);

Bots.sync()
// .then(function() {
//     // Now instantiate an object and save it:
//     return Bots.create({"walker": "Jean Valjean"});
//   })
  // .then(function() {
  //   // Retrieve objects from the database:
  //   return Bots.findAll({ where: {walker: 'asd'} });
  // })
  // .then(function(walkers) {
  //   walkers.forEach(function(walkers) {
  //     console.log(walkers.walker + ' exists');
  //   });
    // db.close();
  // })


// .then(function() {
//   return Bots.create({
//     walker: 'zool'
//   });
// }).then(function(bot) {
//   console.log(bot.get({
//     plain: true
//   }));
// });
// module.exports = Bots;
exports.Bots = Bots;