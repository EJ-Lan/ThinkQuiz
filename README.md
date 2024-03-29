# ThinkQuiz
Quiz Application For Students

## Technologies
1. MongoDB
2. Express
3. Node
4. React

## Features
* Users can create and delete quiz decks
* Users can create, update, and delete quiz cards within decks
* Users may quiz themselves with the flashcards they made
* User accounts to login/signup

## Backend

### Endpoints
These are the endpoints from `cardRoutes.js` and `deckRoutes.js` before each deck endpoint must include `/api/decks` and before each card endpoint must include `/api/cards`

```
// GET all decks
router.get('/', getDecks);

// GET a single deck
router.get('/:id', getDeck);

// POST a new deck (fixed route)
router.post('/', createDeck);

// DELETE a deck
router.delete('/:id', deleteDeck);

// UPDATE a deck
router.patch('/:id', updateDeck);
```

```
// GET all cards
router.get('/', getCards);

// GET a single card
router.get('/:id', getCard);

// POST a new card (fixed route)
router.post('/', createCard);

// DELETE a card
router.delete('/:id', deleteCard);

// UPDATE a card
router.patch('/:id', updateCard);
```

### Models
These are the schema's for the documents in MongoDB from `deckModel.js` and `cardModel.js`

```
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
```

```
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
```

### Testing Backend
**Under Construction**

## Frontend

### Components
**Under Construction**

### Testing Frontend
**Under Construction**

## Getting Started
**Under Construction**
