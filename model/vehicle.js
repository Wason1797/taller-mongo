var mongoose = require('mongoose');
var ownerSchema = mongoose.Schema({
    dni: String,
    name: String,
    birthDate: Date
});


var vehicleSchema = mongoose.Schema({
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
        type:mongoose.Schema.Types.ObjectId, ref:'brand',
        require:true
    },
    model:{
        type:mongoose.Schema.Types.ObjectId, ref:'model',
        require:true
    }
});

var vehicle = module.exports = mongoose.model('vehicle', vehicleSchema);