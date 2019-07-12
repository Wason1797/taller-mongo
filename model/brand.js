var mongoose = require('mongoose');
var brandSchema = mongoose.Schema({
    codeBrand: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    }
});
var Brand = module.exports = mongoose.model('brand', brandSchema);