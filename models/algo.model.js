const mongoose = require('mongoose');

const algoSchema = new mongoose.Schema({
    algoName: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    algoLink: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String,
        of: String,
        required: true
    }
});

const Algo = mongoose.model('Algo', algoSchema);

module.exports = Algo;