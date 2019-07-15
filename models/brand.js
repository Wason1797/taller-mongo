var mongoose = require('mongoose');

var brandSchema = mongoose.Schema({
    codeBrand: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    }
});

brandSchema.index(
    {
        codeBrand: 1
    },
    {
        unique: true
    }
);
module.exports = mongoose.model('brand', brandSchema);