# ThinkQuiz
Quiz Application For Students using MERN stack

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
* `DeckDetails.js` displays the deck
* `CardDetails.js` displays the card
* `DeckForm.js` is a form for the decks
* `CardForm.js` is a form for the cards
* `Navbar.js` is the navbar
* `ButtonSection.js` is the buttons like "quiz"
* `QuizButtons.js` is the buttons for quiz controls
* `QuizCards.js` is the card displayed for quiz

### Hooks
* `UseDecksContext.js` a hook to use the deck context
* `UseCardsContext.js` a hook to use the card context

### Context
* `DecksContext.js` a context for decks
* `CardsContext.js` a context for cards

There are the DecksContext and CardsContext logic
```js
import { createContext, useReducer, useEffect } from 'react'

export const DecksContext = createContext()

export const decksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DECKS':
            return {
                decks: action.payload
            }
        case 'CREATE_DECK':
            return {
                decks: [action.payload, ...state.decks]
            }
        case 'DELETE_DECK':
            return {
                decks: state.decks.filter((d) => d._id !== action.payload)
            }
        default:
            return state
    }
}

export const DecksContextProvider = ({ children }) => {
    const localState = JSON.parse(localStorage.getItem('decks')) || [];
    const [state, dispatch] = useReducer(decksReducer, {
        decks: localState
    });

    useEffect(() => {
        localStorage.setItem('decks', JSON.stringify(state.decks));
    }, [state.decks]);

    return (
        <DecksContext.Provider value={{ ...state, dispatch }}>
            { children }
        </DecksContext.Provider>
    );
}
```
```js
import { createContext, useReducer } from 'react'

export const CardsContext = createContext()

export const cardsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CARDS':
            return {
                ...state,
                cards: action.payload
            }
        case 'CREATE_CARD':
            const newCard = action.payload;
            const deckWithNewCard = state.decks.find(deck => deck._id === newCard.deck);
            if (deckWithNewCard) {
                deckWithNewCard.cards.push(newCard);
            }

            return {
                ...state,
                decks: state.decks.map(deck => deck._id === deckWithNewCard?._id ? deckWithNewCard : deck),
                cards: [newCard, ...state.cards]
            }
        case 'DELETE_CARD':
            const deletedCardId = action.payload;
            const deckWithDeletedCard = state.decks.find(deck => deck.cards.some(card => card._id === deletedCardId));
            if (deckWithDeletedCard) {
                deckWithDeletedCard.cards = deckWithDeletedCard.cards.filter(card => card._id !== deletedCardId);
            }

            return {
                ...state,
                decks: state.decks.map(deck => deck._id === deckWithDeletedCard?._id ? deckWithDeletedCard : deck),
                cards: state.cards.filter((c) => c._id !== deletedCardId)
            }
        default:
            return state
    }
}

export const CardsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cardsReducer, {
        cards: [],
        decks: []
    })

    return (
        <CardsContext.Provider value={{ ...state, dispatch }}>
            {children}
        </CardsContext.Provider>
    )
}
```

### Pages
* `DeckDetailsPage.js` page for showing cards and card form
* `HomePage.js` a page that shows decks and deck form
* `QuizPage.js` a page that shows shows the deck cards

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
