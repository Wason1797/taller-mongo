import { Schema } from 'mongoose';

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

    owner: ownerSchema


});