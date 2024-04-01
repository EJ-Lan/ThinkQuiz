import { useState } from 'react';
import { useCardsContext } from '../hooks/useCardsContext';

const CardForm = ({ deckId }) => {
    const { dispatch } = useCardsContext();
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsAdding(true);
    
        const card = {question, answer, deck: deckId};
    
        const response = await fetch('http://localhost:4000/api/cards', {
            method: 'POST',
            body: JSON.stringify(card),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
    
        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields);
        }
        if (response.ok) {
            setQuestion('');
            setAnswer('');
            setError(null);
            setEmptyFields([]);
            dispatch({type: 'CREATE_CARD', payload: json});
        }
    }

    return (
        <form className={`create ${isAdding ? 'adding' : ''}`} onSubmit={handleSubmit}>
            <h3>Add a New Card</h3>

            <label>Question:</label>
            <input 
                type="text"
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
                className={emptyFields.includes('question') ? 'error': ''}
            />
            
            <label>Answer:</label>
            <input 
                type="text" 
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                className={emptyFields.includes('answer') ? 'error': ''}
            />

            <button>Add Card</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default CardForm;