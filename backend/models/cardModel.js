const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
    },
    answer: {
        type: String,
        required: true,
        trim: true,
    },
    deck: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Deck',
        required: true,
    }
}, {
    timestamps: true
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;