var db = require('../sequelize');
var Robot = require('../models/robot');

var Robot = new db.Collection();

Robot.model = Robot;

module.exports = Robot;
