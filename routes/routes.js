// Initialize express router
let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
    });
});


var modelController = require('../controllers/modelController');
var brandController = require('../controllers/brandController');
var vehicleController = require('../controllers/vehicleController');

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

router.route('/vehicles')
    .post(vehicleController.new)
    .get(vehicleController.findAll)

router.route('/vehicles/:plate')
    .get(vehicleController.findByPlate)

router.route('/vehicles/brand/:brand')
    .get(vehicleController.findByBrand)

router.route('/vehicles/model/:model')
    .get(vehicleController.findByModel)

router.route('/vehicles/owner/')
    .put(vehicleController.updateOwner)

router.route('/vehicles/owner/age/:age')
    .get(vehicleController.findByAge)

module.exports = router