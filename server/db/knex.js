var path = require('path');
var knex = require('knex') ({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'Robots'
  },
  useNullAsDefault: true
})

var db = require('bookshelf')(knex);

db.knex.schema.hasTable('bots').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('bots', function(bot) {
      link.increments('id').primary();
      bot.string('bot', 40).unique();
    }).then(function(table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
