# ThinkQuiz
Quiz Application For Students

# About
Think Quiz is a web app that enables users to create quiz decks and cards and study them for any topic

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

```js
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

```js
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

```js
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

```js
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
1. **Integration Tests**: Tests to ensure the API is functioning properly

## Frontend

### Components
* `Main.js` is the main page
* `DeckDetails.js` displays the deck
* `CardDetails.js` displays the card
* `DeckForm.js` is a form for the decks
* `CardForm.js` is a form for the cards
* `Navbar.js` is the navbar

### Hooks
* `UseDeckContext.js` a hook to use the deck context
* `UseCardContext.js` a hook to use the card context

### Context
* `DecksContext.js` a context for decks
* `CardsContext.js` a context for cards

### Testing Frontend
1. **Component Tests**: Tests to ensure the components render and behave correctly

## Getting Started
To get started with ThinkQuiz, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EJ-Lan/ThinkQuiz.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd ThinkQuiz
   ```
3. **Install dependencies for the server (Node.js/Express.js)
   ```bash
   cd backend
   npm install
   ```
4. **Install dependencies for the client (React.js)**
   ```bash
   cd frontend
   npm install
   ```
5. **Setup MongoDB:**
   * Ensure MongoDB is installed and running on your system
   * Set up the MongoDB connection URI and Port number in a `.env` file
6. **Start the server:**
   ```bash
   cd backend
   npm start
   ```
7. **Start the client:**
   ```bash
   cd frontend
   npm start
   ```
8. **Access ThinkQuiz in your browser:**
   * Open [http://localhost:3000](http://localhost:3000) in your web browser
