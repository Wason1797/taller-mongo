var sql = require('../DB/db.js');

var brand = function (brand) {
    this.codeBrand = brand.codeBrand;
    this.name = brand.name;
};

module.exports = brand;