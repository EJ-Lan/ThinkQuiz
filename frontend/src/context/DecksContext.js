import { createContext, useReducer } from 'react'

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
    const [state, dispatch] = useReducer(decksReducer, {
        decks: null
    })

    return (
        <DecksContext.Provider value={{ ...state, dispatch }}>
            { children }
        </DecksContext.Provider>
    )
}