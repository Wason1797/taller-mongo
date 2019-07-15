var sql = require('../DB/db.js');

var Brand = function (brand) {
    this.codeBrand = brand.codeBrand;
    this.name = brand.name;
};

module.exports = Brand;