const express = require('express');
const {
    createCard,
    getCards,
    getCard,
    deleteCard,
    updateCard
} = require('../controllers/cardController');

const router = express.Router();

// GET all cards
router.get('/', getCards);

// GET a single card
router.get('/:id', getCard);

// POST a new card
router.post('/', createCard);

// DELETE a card
router.delete('/:id', deleteCard);

// UPDATE a card
router.patch('/:id', updateCard);

module.exports = router;
