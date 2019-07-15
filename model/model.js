var sql = require('../DB/db.js');

var model = function (model){
    this.codeModel = model.codeModel;
    this.codeBrand = model.codeBrand;
    this.name = model.name;
};
module.exports = model;