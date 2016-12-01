var Sequelize = require('sequelize');
var db = new Sequelize('Robots', 'root', '');

var Bots = db.define('bots', {
  walker: Sequelize.STRING(40),
  allowNull: false,
  unique: true
});

db.sync();
// .then(function() {
//   return Bots.create({
//     walker: 'zool'
//   });
// }).then(function(bot) {
//   console.log(bot.get({
//     plain: true
//   }));
// });

exports.Bots = Bots;