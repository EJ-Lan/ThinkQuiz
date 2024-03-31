import { useDecksContext } from '../hooks/useDeckContext';

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const DeckDetails = ({ deck }) => {
    const { dispatch } = useDecksContext()

    const handleClick = async () => {
        const response = await fetch('http://localhost:4000/api/decks/' + deck._id, {
            method: 'DELETE'
        });
    
        if (response.ok) {
            const json = await response.json();
            dispatch({ type: 'DELETE_DECK', payload: json });
        } else {
            console.error('Failed to delete deck: ', await response.text());
        }
    };
    

    return (
        <div className="deck-details">
            <h4>{deck.name}</h4>
            <p><strong>Description:</strong> {deck.description}</p>
            <p>{formatDistanceToNow(new Date(deck.createdAt), { addSuffix: true })}</p>
            <span className="material-symbol-outlined" onClick={handleClick}>Delete</span>
        </div>
    );
}
 
export default DeckDetails;