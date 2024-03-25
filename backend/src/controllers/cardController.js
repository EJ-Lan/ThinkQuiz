const Card = require('../models/cardModel');
const mongoose = require('mongoose');

// GET all cards
const getCards = async (req, res) => {
    const cards = await Card.find({}).sort({createdAt: -1})

    res.status(200).json(cards)
}

// GET a single card
const getCard = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such card'})
    }

    const card = await Card.findById(id)

    if (!card) {
        return res.status(404).json({error: 'No such card'})
    }

    res.status(200).json(card)
}

// POST a new card
const createCard = async (req, res) => {
    const {question, answer, deck} = req.body

    let emptyFields = []

    if (!question) {
        emptyFields.push('question')
    }
    if (!answer) {
        emptyFields.push('answer')
    }
    
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields})
    }

    try {
        const card = await Card.create({question, answer, deck})
        res.status(200).json(card)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a card
const deleteCard = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such card'});
    }

    const card = await Card.findOneAndDelete({_id: id});

    if (!card) {
        return res.status(404).json({error: 'No such card'});
    }

    res.status(200).json(card);
};

// UPDATE a card
const updateCard = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such card'});
    }

    const card = await Card.findOneAndUpdate({_id: id}, {
        ...req.body
    }, { new: true });

    if (!card) {
        return res.status(404).json({error: 'No such card'});
    }

    res.status(200).json(card);
};

module.exports = {
    createCard,
    getCards,
    getCard,
    deleteCard,
    updateCard
};