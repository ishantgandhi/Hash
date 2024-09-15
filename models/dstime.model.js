const mongoose = require('mongoose');

const timeSchema = new mongoose.Schema({
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
    complexities: {
        type: Map,
        of: String,
        required: true
    }
});

const Time = mongoose.model('Time', timeSchema);

module.exports = Time;