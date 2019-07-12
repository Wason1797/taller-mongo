import {  model, Schema} from 'mongoose';

var modelSchema = Schema({
    codeModel: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    },
    codeBrand: {
        type:Schema.brand.codeBrand, ref:'brand',
        require:true
    }
});
var Model = module.exports = model('model', modelSchema);