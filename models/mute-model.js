let mongoose = require('mongoose');

let MuteSchema = new mongoose.Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    totalMutes: {
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('Mute', MuteSchema);