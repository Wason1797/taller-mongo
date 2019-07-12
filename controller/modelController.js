Model = require('../model/model');


exports.index = function (req, res) {
    Model.get(function (err, models) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Models retrieved successfully",
            data: models
        });
    });
};
// Handle create model actions
exports.new = function (req, res) {
    var model = new Model();
    model.name = req.body.name ? req.body.name : model.name;
    model.codeModel = req.body.codeModel;
    model.codeBrand = req.brand.codeBrand;
    // save the model and check for errors
    model.save(function (err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New model created!',
            data: model
        });
    });
};
// Handle view model info
exports.view = function (req, res) {
    Model.findById(req.params.codeModel, function (err, model) {
        if (err)
            res.send(err);
        res.json({
            message: 'Model details loading..',
            data: model
        });
    });
};
// Handle update model info
exports.update = function (req, res) {
    Model.findById(req.params.codeModel, function (err, model) {
        if (err)
            res.send(err);
        model.name = req.body.name ? req.body.name : model.name;
        model.codeModel = req.body.codeModel;
        model.codeBrand = req.brand.codeBrand;
        // save the model and check for errors
        model.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Model Info updated',
                data: model
            });
        });
    });
};
// Handle delete model
exports.delete = function (req, res) {
    Model.remove({
        _id: req.params.contact_id
    }, function (err, model) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Model deleted'
        });
    });
};