const { Brand } = require('../model/brand')

exports.index = function (req, res) {
    Brand.findAll({
    })
        .then(busca => {
            res.json(busca)
        })
};

exports.new = function (req, res) {
    let body = req.body;
    Brand.create({
        codeBrand: body.codeBrand,
        name: body.name
    })
        .then((created) => {
            return res.json(created);
        }).catch(() => {
            return res.status(500).json();
        })
};

exports.view = function (req, res) {
    let id = req.params.codeBrand
    Brand.findAll({
        where: {
            codeBrand: id
        }
    })
        .then(busca => {
            res.json(busca)
        })
};
//