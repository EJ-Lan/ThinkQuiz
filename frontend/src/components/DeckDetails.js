import { useState } from 'react';
import { useDecksContext } from '../hooks/useDecksContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Link } from 'react-router-dom';

const DeckDetails = ({ deck }) => {
    const { dispatch } = useDecksContext();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleClick = () => {
        setIsDeleting(true);
        fetch('http://localhost:4000/api/decks/' + deck._id, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                dispatch({ type: 'DELETE_DECK', payload: deck._id });
            } else {
                console.error('Failed to delete deck: ', response.text());
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className={`deck-details ${isDeleting ? 'deleting' : ''}`}>
            <h4>{deck.name}</h4>
            <p><strong>Description:</strong> {deck.description}</p>
            <p>{formatDistanceToNow(new Date(deck.createdAt), { addSuffix: true })}</p>
            <span className="material-symbol-outlined" onClick={handleClick}>Delete</span>
            <Link to={`/decks/${deck._id}`} className="view-details">View Details</Link>
        </div>
    );
}

export default DeckDetails;