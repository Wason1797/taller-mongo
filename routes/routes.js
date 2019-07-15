// Initialize express router
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
    });
});


var modelController = require('../controllers/modelController');
var brandController = require('../controllers/brandController');

router.route('/models')
    .get(modelController.index)
    .post(modelController.new)

router.route('/models/:codeModel')
    .get(modelController.view)

router.route('/brands')
    .post(brandController.new)
    .get(brandController.index);

router.route('/brands/:codeBrand')
    .get(brandController.view);

module.exports = router