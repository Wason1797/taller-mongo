const { Modelo } = require('../model/model');
const { Brand } = require('../model/brand');
const { Vehicle } = require('../model/vehicle');
const { Owner } = require('../model/owner');

var moment = require('moment')


exports.new = function (req, res) {
    let vehicle = req.body;
    let dni;
    let codeBrand;
    let codeModel;
    let ownerNew = req.body.owner;
    if (req.body.plate.length == 7) {
        vehicle.plate = req.body.plate;
    }
    else {
        res.status(400).send({ "message": "non a valid plate" });
        return
    }
    Owner.findAll({
        where: {
            dni: ownerNew.dni
        }
    }).then(owner => {
        if (owner.length == 0) {
            Owner.create({
                dni: ownerNew.dni,
                name: ownerNew.name,
                birthDate: ownerNew.birthDate
            })
                .then((created) => {
                    dni = created[0].dni;
                }).catch(() => {
                    return res.status(500).json({ "message": "the owner already exists" });
                })
        }
        else {
            dni = owner[0].dni;
        }
    })
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
    Brand.findAll({
        where: {
            codeBrand: req.body.codeBrand
        }
    }).then(brand => {
        if (brand.length == 0) {
            res.status(404).json({ "message": "No brand" });
            return;
        }
        else {
            codeBrand = brand[0].codeBrand;
            console.log(codeBrand);
        }
        Modelo.findAll({
            where: {
                codeModel: req.body.codeModel
            }
        }).then(model => {
            if (model.length == 0) {
                res.status(404).json({ "message": "No model" });
                return;
            }
            else {
                codeModel = model[0].codeModel;
            }
            Vehicle.create({
                plate: vehicle.plate,
                year: vehicle.year,
                engine: vehicle.engine,
                transmision: vehicle.transmision,
                dni: ownerNew.dni,
                codebrand: codeBrand,
                codemodel: codeModel
            })
                .then((created) => {
                    return res.json(created);
                }).catch(() => {
                    return res.status(500).json({ "message": "the vehicle already exists" });
                })
        })
    })
};


exports.findByPlate = function (req, res) {
    Vehicle.findAll({
        where: {
            plate: req.params.plate
        }
    })
        .then(vehicle => {
            if (vehicle.length == 0) {
                return res.status(404).json({ "messge": "No vehicle" });
            }
            else {
                return res.json(vehicle);
            }
        })
};

exports.findByBrand = function (req, res) {
    Brand.findAll({
        where: {
            name: req.params.brand
        }
    }).then(brand => {
        if (brand.length == 0) {
            res.status(404).json({ "message": "No brand with name found" });
            return;
        }
        else {
            Vehicle.findAll({
                where: {
                    codebrand: brand[0].codeBrand
                }
            }).then(vehicles => {
                if (vehicles.length == 0) {
                    res.status(404).json({ "message": "No vehicle with brand name found" });
                    return;
                }
                else {
                    res.json(vehicles);
                }
            })
        }
    })
};

exports.findByModel = function (req, res) {
    Modelo.findAll({
        where: {
            name: req.params.model
        }
    }).then(model => {
        if (model.length == 0) {
            res.status(404).json({ "message": "No model with name found" });
            return;
        }
        else {
            Vehicle.findAll({
                where: {
                    codemodel: model[0].codeModel
                }
            }).then(vehicles => {
                if (vehicles.length == 0) {
                    res.status(404).json({ "message": "No vehicle with brand name found" });
                    return;
                }
                else {
                    res.json(vehicles);
                }
            })
        }
    })
};


exports.updateOwner = function (req, res) {
    let body = req.body;
    let dni = req.body.owner.dni;
    let ownerNew = req.body.owner;
    Vehicle.findAll({
        where: {
            plate: req.body.plate
        }
    })
        .then(vehicle => {
            if (vehicle.length == 0) {
                return res.status(404).json({ "messge": "No vehicle" });
            }
            else {
                Owner.findAll({
                    where: {
                        dni: req.body.owner.dni
                    }
                }).then(owner => {
                    if (owner.length == 0) {
                        Owner.create({
                            dni: ownerNew.dni,
                            name: ownerNew.name,
                            birthDate: ownerNew.birthDate
                        })
                            .then((created) => {
                                dni = ownerNew.dni;
                            }).catch(() => {
                                return res.status(500).json({ "message": "the owner already exists" });
                            })
                    }
                    else {
                        dni = owner[0].dni;
                    }
                    Vehicle.update({ dni: dni }, {
                        where: {
                            plate: req.body.plate
                        }
                    }).then(vehicle => {
                        res.json(vehicle);
                    }).catch(() => {
                        return res.status(404).json();
                    })
                })
            }
        })
};

exports.findAll = function (req, res) {
    Vehicle.findAll({
    })
        .then(vehicles => {
            if (vehicles.length == 0) {
                res.status(404).json({ "message": "No vehicle" })
            }
            else {
                res.json(vehicles);
            }
        })
};

exports.findByAge = function (req, res) {
    let date = moment().subtract(req.params.age, 'years');
    console.log(date.toISOString())
    date.setFullYear(date.getFullYear() - id);
    Vehicle.findAll({
        include: [{
            model: owner,
            where: {
                birthDate: {
                    [Op.lt]: date.toISOString()
                }
            }
        }
        ]
    }).then(vehicle => {
        if (vehicle[0] == undefined) {
            res.status(404).json({ "message": "No vehicle" });
        } else {
            res.json(vehicle);
        }
    }).catch(err => {
        console.log(err);
        res.status(500).send("Error");
    })
};
