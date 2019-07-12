import {  model, Schema} from 'mongoose';

var brandSchema = Schema({
    codeBrand: {
        type:String,
        require:true
    },
    name: {
        type:String,
        require:true
    }
});
var Brand = module.exports = model('brand', brandSchema);