var Brand = require('../models/brand');

exports.index = function (req, res) {
    Brand.find(function (err, brands) {
        if (err) {
            res.status(400).json({
                status: "error",
                message: err,
            });
        }
        else {
            if (brands.length == 0) {
                res.status(404).json()
            }
            else {
                res.json(brands);
            }

        }
    });
};


exports.new = function (req, res) {
    var brand = new Brand();
    brand.name = req.body.name;
    brand.codeBrand = req.body.codeBrand;

    brand.save(function (err) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(brand);
        }
    });
};

exports.view = function (req, res) {
    Brand.findOne({ codeBrand: req.params.codeBrand }, function (err, brand) {
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
