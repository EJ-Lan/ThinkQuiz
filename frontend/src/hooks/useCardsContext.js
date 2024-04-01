import { CardsContext } from '../context/CardsContext'
import { useContext } from 'react';

export const useCardsContext = () => {
    const context = useContext(CardsContext)

    if(!context) {
        throw Error('useCardsContext must be inside an CardsContextProvider')
    }

    return context
}