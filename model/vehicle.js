import {  model, Schema} from 'mongoose';
var ownerSchema = Schema({
    dni: String,
    name: String,
    birthDate: Date
});


var vehicleSchema = Schema({
    plate: {
        type: String,
        rquired: true
    },
    year: {
        type: Number,
        required: true
    },
    engine: {
        type: Number
    },
    transmision: {
        type: String
    },
    owner: ownerSchema,
    brand:{
        type:Schema.brand.codeBrand, ref:'brand',
        require:true
    },
    model:{
        type:Schema.model.codeModel, ref:'model',
        require:true
    }
});

var vehicle = module.exports = model('vehicle', vehicleSchema);