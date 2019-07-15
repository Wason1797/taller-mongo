var Model = require('../models/model');
var Brand = require('../models/brand');


exports.index = function (req, res) {
    Model.find(function (err, models) {
        if (err) {
            res.status(400).json({
                status: "error",
                message: err,
            });
        }
        else {
            if (models == null) {
                res.status(404).json()
            }
            else {
                res.status(200).json(models);
            }

        }

    });
};

exports.new = function (req, res) {
    var model = new Model();


    model.name = req.body.name ? req.body.name : model.name;
    model.codeModel = req.body.codeModel;
    Brand.findOne({ codeBrand: req.body.codeBrand }, function (err, brand) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            model.brand = brand._id;
        }

    });

    model.save(function (err) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(model);
        }

    });
};

exports.view = function (req, res) {
    Model.findOne({ codeModel: req.params.codeModel }, function (err, model) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            if (model == null) {
                res.status(404).json()
            }
            else {
                res.json(model);
            }
        }

    });
};
