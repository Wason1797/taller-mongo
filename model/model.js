var mongoose = require('mongoose');
var modelSchema = mongoose.Schema({
    codeBrand: {
        type:Schema.brandSchema.codeBrand, ref:'brand',
        require:true
    },
    name: {
        type:String,
        require:true
    }
});
var Model = module.exports = mongoose.model('model', modelSchema);