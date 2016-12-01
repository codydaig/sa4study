var db = require('../sequelize');

var Robot = db.Model.extend({
  tableName: 'bots',
  hasTimestamps: ,
  initialize: function() {
    this.on('creating', function(model,attr,options) {
      this.set("walker", model.attributes.walker);
    })
  }
});

Robot.update(
  { walker: req.body.walker },
  { where: req.body.id }
).then(result =>
  console.log("Robot updated successfully!");
).catch(err =>
  console.log('err update', err);
)

Robot.findAll({
  where: {
    walker: req.body.walker,
    where: req.body.id
  }
})

module.exports = Robot;
