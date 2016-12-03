var db = require('../db/orm-sequelize');
//routes version

module.exports = {
  thesebots: {
    get: function(req, res) {
      console.log('in first get' , req)
      db.Bots.findAll({ include: [db.Bots] })
        .then(function(found) {
          console.log(found)
          res.json(found);
        });
    },
    post: function(req, res) {
      console.log('in post' , req)
      db.Bots.findOrCreate({ where: { walker: req.body.walker } })
        .spread(function(walker, created) {
          db.Bots.create({
            id: bots.get('id'),
            walker: req.body.walker,
          }).then(function(found) {
            res.sendStatus(201);
            res.status(201).send(found.attributes);
          });
        });
    },

    get: function(req, res) {
      db.Bots.findOne({ where: { id: req.body.id } })
        .then(function(found) {
          res.json(found);
          res.status(200).send(found.attributes);
        });
    },
    put: function(req, res) {
      db.Bots.findOne({ where: { id: req.body.id } })
        .spread(function(walker, created) {
          db.Bots.update({
            id: bots.get('id'),
            walker: req.body.walker,
          }).then(function(found) {
            // res.sendStatus(200);
            res.status(200).send(found.attributes);
          });
        });
    },
    delete: function(req, res) {
      db.Bots.destroy({ where: { id: req.body.id } })
    }
  }
};
