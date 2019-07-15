var Model = require('../models/model');
var Brand = require('../models/brand');
var Vehicle = require('../models/vehicle')


exports.new = function (req, res) {
    var vehicle = new Vehicle();

    vehicle.plate = req.body.plate;
    vehicle.owner = req.body.owner;
    if (Number.isInteger(req.body.year) && req.body.year >= 1980 && req.body.year <= 2019) {
        vehicle.year = req.body.year;
    }
    else {
        res.status(400).send({ "message": "non a valid year" });
        return
    }
    if (Number.isInteger(req.body.engine) && req.body.engine > 0 && req.body.engine < 9999) {
        vehicle.engine = req.body.engine
    }
    else {
        res.status(400).send({ "message": "non a valid engine number" });
        return
    }

    if (req.body.transmision == "MAN" || req.body.transmision == "AUT") {
        vehicle.transmision = req.body.transmision
    }
    else {
        res.status(400).send({ "message": "non a valid transmision" });
        return
    }

    Brand.findOne({ codeBrand: req.body.codeBrand }, function (err, brand) {
        if (err) {
            res.status(400).send(err);
            return
        }
        else {
            if (brand == null) {
                res.status(404).send({ "message": "no brand with id found" });
                return
            }
            else {
                vehicle.brand = brand._id;
                Model.findOne({ codeModel: req.body.codeModel }, function (err, model) {
                    if (err) {
                        res.status(400).send(err);
                        return
                    }
                    else {
                        if (model == null) {
                            res.status(404).send({ "message": "no model with id found" });
                            return
                        }
                        vehicle.model = model._id;
                        vehicle.save(function (err) {
                            if (err) {
                                res.status(400).json(err);
                            }
                            else {
                                res.status(200).json(vehicle);
                            }
                        });
                    }
                });
            }
        }
    });
};


exports.findByPlate = function (req, res) {
    Vehicle.findOne({ plate: req.params.plate }, function (err, vehicle) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            if (vehicle == null) {
                res.status(404).json()
            }
            else {
                res.json(vehicle);
            }
        }

    });
};

exports.findByBrand = function (req, res) {
    Brand.findOne({ name: req.params.brand }, function (err, brand) {
        if (brand == null) {
            res.status(404).send({ "messge": "No brand with name found" });
            return
        }
        else {
            Vehicle.find({ brand: brand._id }, function (err, vehicles) {
                if (err) {
                    res.status(400).send(err);
                }
                else {
                    if (vehicles.length == 0) {
                        res.status(404).json({ "message": "No vehicle with brand name found" })
                    }
                    else {
                        res.json(vehicles);
                    }
                }

            });
        }
    })
};

exports.findByModel = function (req, res) {
    Model.findOne({ name: req.params.model }, function (err, model) {
        if (model == null) {
            res.status(404).send({ "messge": "No model with name found" });
            return
        }
        else {
            Vehicle.find({ model: model._id }, function (err, vehicles) {
                if (err) {
                    res.status(400).send(err);
                }
                else {
                    if (vehicles.length == 0) {
                        res.status(404).json({ "message": "No vehicle with model name found" })
                    }
                    else {
                        res.json(vehicles);
                    }
                }
            });
        }
    })
};


// exports.updateOwner = function (req, res) {

//     Vehicle.findOneAndUpdate({ plate: req.body.plate },
//         { owner: req.body.owner },
//         { new: true },
//         function (err, vehicle) {
//             if (err) {
//                 res.status(400).send(err);
//             }
//             else {
//                 res.json(vehicles);

//             }
//         });

// };