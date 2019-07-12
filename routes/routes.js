// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',

    });
});


// Import contact controller
var modelController = require('../model/model');
// Contact routes
router.route('/models')
    .get(modelController.index)
    .post(modelController.new);
router.route('/models/:codeModel')
    .get(modelController.view)
    .patch(modelController.update)
    .put(modelController.update)
    .delete(modelController.delete);


module.exports = router