import { DecksContext } from '../context/DecksContext'
import { useContext } from 'react'

export const useDecksContext = () => {
    const context = useContext(DecksContext)

    if(!context) {
        throw Error('useDecksContext must be inside an DecksContextProvider')
    }

    return context
    
}