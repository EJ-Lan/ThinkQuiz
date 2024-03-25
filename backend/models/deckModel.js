const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    }]
}, {
    timestamps: true
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;