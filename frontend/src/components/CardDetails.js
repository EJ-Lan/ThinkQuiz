import { useState } from 'react';
import { useCardsContext } from '../hooks/useCardsContext';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const CardDetails = ({ card }) => {
    const { dispatch } = useCardsContext();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleClick = () => {
        setIsDeleting(true);
        fetch('http://localhost:4000/api/cards/' + card._id, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                dispatch({ type: 'DELETE_CARD', payload: card._id });
            } else {
                console.error('Failed to delete card: ', response.text());
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className={`deck-details ${isDeleting ? 'deleting' : ''}`}>
            <h4>{card.question}</h4>
            <p><strong>Answer:</strong> {card.answer}</p>
            <p>{formatDistanceToNow(new Date(card.createdAt), { addSuffix: true })}</p>
            <span className="material-symbol-outlined" onClick={handleClick}>Delete</span>
        </div>
    );
}

export default CardDetails;