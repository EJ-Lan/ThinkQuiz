const Deck = require('../models/deckModel');
const Card = require('../models/cardModel');
const mongoose = require('mongoose');

// GET  all decks
const getDecks = async (req, res) => {
    const decks = await Deck.find({}).populate('cards').sort({createdAt: -1});
    res.status(200).json(decks);
};

// GET  a single deck
const getDeck = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such deck' });
    }

    const deck = await Deck.findById(id).populate('cards');

    if (!deck) {
        return res.status(404).json({ error: 'No such deck' });
    }

    res.status(200).json(deck);
};

// POST a new deck
const createDeck = async (req, res) => {
    const { name, description } = req.body;

    let emptyFields = [];
    if (!name) {
        emptyFields.push('name');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields });
    }

    try {
        const deck = await Deck.create({ name, description });
        res.status(200).json(deck);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE a deck
const deleteDeck = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such deck' });
    }

    // First, find the deck to get the list of cards
    const deck = await Deck.findById(id);
    if (!deck) {
        return res.status(404).json({ error: 'No such deck' });
    }

    // Delete all cards associated with this deck
    await Card.deleteMany({ _id: { $in: deck.cards } });

    // Then, delete the deck itself
    await Deck.deleteOne({ _id: id });

    res.status(200).json({ message: 'Deck and associated cards deleted successfully', id });
};


// UPDATE a deck
const updateDeck = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such deck' });
    }

    const deck = await Deck.findOneAndUpdate({_id: id}, {
        ...req.body
    }, { new: true });


    if (!deck) {
        return res.status(404).json({ error: 'No such deck' });
    }

    res.status(200).json(deck);
};


module.exports = {
    getDecks,
    getDeck,
    createDeck,
    deleteDeck,
    updateDeck
};