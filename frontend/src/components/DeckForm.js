import { useState } from 'react';
import { useDecksContext } from '../hooks/useDeckContext';

const DeckForm = () => {
    const { dispatch } = useDecksContext();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);
    const [isAdding, setIsAdding] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsAdding(true);

        const deck = {name, description};

        const response = await fetch('http://localhost:4000/api/decks', {
            method: 'POST',
            body: JSON.stringify(deck),
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
            setName('');
            setDescription('');
            setError(null);
            setEmptyFields([]);
            dispatch({type: 'CREATE_DECK', payload: json});
        }
    }

    return (
        <form className={`create ${isAdding ? 'adding' : ''}`} onSubmit={handleSubmit}>
            <h3>Add a New Deck</h3>

            <label>Deck Name:</label>
            <input 
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className={emptyFields.includes('name') ? 'error': ''}
            />
            
            <label>Deck Description:</label>
            <input 
            type="text" 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className={emptyFields.includes('description') ? 'error': ''}
            />

            <button>Add Deck</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}

export default DeckForm;