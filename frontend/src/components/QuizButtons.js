import { useNavigate } from 'react-router-dom';

const QuizButtons = ({ currentCardIndex, setCurrentCardIndex, cardsLength, deckId }) => {
    const navigate = useNavigate();

    return (
        <div>
            {currentCardIndex > 0 && (
                <button onClick={() => setCurrentCardIndex(currentCardIndex - 1)}>Previous</button>
            )}
            {currentCardIndex < cardsLength - 1 && (
                <button onClick={() => setCurrentCardIndex(currentCardIndex + 1)}>Next</button>
            )}
            <button onClick={() => navigate(`/decks/${deckId}`)}>Quit</button>
        </div>
    );
};

export default QuizButtons;