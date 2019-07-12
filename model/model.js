var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    codeModel: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    codeBrand: {
        type: mongoose.Schema.Types.ObjectId, ref: 'brand',
        require: true
    }
});
var Model = mongoose.model('model', modelSchema);

module.exports = Model;