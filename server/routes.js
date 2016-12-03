var controller = require('./controller');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/', controller.thesebots.get);
router.get('/robots', controller.thesebots.get);
router.post('/robots', controller.thesebots.post);
router.get('/robots/:id', controller.thesebots.get);
router.put('/robots/:id', controller.thesebots.put);
router.delete('/robots/:id', controller.thesebots.delete);

module.exports = router;

