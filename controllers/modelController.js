var Model = require('../model/model');
var Brand = require('../model/brand');
var sql = require('../DB/db.js');

exports.index = function (req, res) {
    sql.query("Select * from model",function (err, models) {
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
    var model = new Model(req.body);
    sql.query("Select * from brand where codebrand = ?",req.body.codeBrand, function (err, brand) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            model.brand = brand._id;
        }

    });

    sql.query("INSERT INTO model set ?", model,function (err) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(model);
        }

    });
};

exports.view = function (req, res) {
    sql.query("Select * from model where codemodel = ?",req.params.codeModel, function (err, model) {
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
