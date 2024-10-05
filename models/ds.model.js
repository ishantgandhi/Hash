const mongoose = require('mongoose');

const dataStructureSchema = new mongoose.Schema({
    dsaName: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    space: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

const DSA = mongoose.model('DSA', dataStructureSchema);

module.exports = DSA;