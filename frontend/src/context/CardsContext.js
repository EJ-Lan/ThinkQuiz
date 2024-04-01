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