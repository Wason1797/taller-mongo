const { Modelo } = require('../model/model');
const { Brand } = require('../model/brand');

exports.index = function (req, res) {
    Modelo.findAll({
    })
        .then(busca => {
            res.json(busca)
        })
};

exports.new = function (req, res) {
    let body = req.body;
    let codeBrand;
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
        }
        Modelo.create({
            codeModel: body.codeModel,
            codeBrand: codeBrand,
            name: body.name
        })
            .then((created) => {
                return res.json(created);
            }).catch(() => {
                return res.status(500).json({ "message": "the model already exists" });
            })
    })
};

exports.view = function (req, res) {
    let id = req.params.codeModel
    Modelo.findAll({
        where: {
            codeModel: id
        }
    })
        .then(model => {
            if (brand.length == 0) {
                res.status(404).json({ "message": "No Model" });
                return;
            }
            else {
                res.json(model);
            }
        })
};
