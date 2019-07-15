var Brand = require('../model/brand');
var sql = require('../DB/db.js');
exports.index = function (req, res) {
    sql.query("Select * from brand",function (err, brands) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
          }
          res.json({'status': 'success', brands})
    });
};
// Handle create contact actions
exports.new = function (req, res) {
    var brandnew = new Brand(req.body);
    sql.query("INSERT INTO brand set ?", brandnew, function (err, result) {
        if(err) {
            res.status(500).send({ error: 'Something failed!' })
          }
          res.json({'status': 'success', brandnew})
    });
};

exports.view = function (req, res) {
    sql.query("Select * from brand where codebrand = ?",req.params.codeBrand, function (err, brand) {
        if (err)
            res.send(err);
        res.json({
            message: 'Brand details loading..',
            data: brand
        });
    });
};
//