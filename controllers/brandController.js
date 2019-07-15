var Brand = require('../model/brand');
var sql = require('../DB/db.js');

exports.index = function (req, res) {
    sql.query("Select * from brand",function (err, brands) {
        if (err) {
            res.status(400).json({
                status: "error",
                message: err,
            });
        }
        else {
            if (brands == null) {
                res.status(404).json()
            }
            else {
                res.json(brands);
            }

        }
    });
};

exports.new = function (req, res) {
    var brandnew = new Brand(req.body);
    sql.query("INSERT INTO brand set ?", brandnew, function (err, result) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(brandnew);
        }
    });
};

exports.view = function (req, res) {
    sql.query("Select * from brand where codebrand = ?",req.params.codeBrand, function (err, brand) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            if (brand == null) {
                res.status(404).json()
            }
            else {
                res.status(200).json(brand);
            }

        }
    });
};
//