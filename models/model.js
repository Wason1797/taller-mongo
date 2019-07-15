var mongoose = require('mongoose')

var modelSchema = mongoose.Schema({
    codeModel: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true
    },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'brand' }

});

modelSchema.index(
    {
        codeModel: 1
    },
    {
        unique: true
    }
);



module.exports = mongoose.model('model', modelSchema);