const express = require('express')
const { createDeck,
    getDecks,
    getDeck,
    deleteDeck,
    updateDeck
} = require('../controllers/deckController')

const router = express.Router()

// GET all decks
router.get('/', getDecks)

// GET a single deck
router.get('/:id', getDeck)

// POST a new deck
router.post('/:id', createDeck)

// DELETE a deck
router.delete('/:id', deleteDeck)

// UPDATE a deck
router.patch('/:id', updateDeck)

module.exports = router;