import { useNavigate } from 'react-router-dom';

const QuizButtons = ({ currentCardIndex, setCurrentCardIndex, cardsLength, deckId }) => {
    const navigate = useNavigate();

    return (
        <div className="button-container">
            {currentCardIndex > 0 && (
                <button className="nav-btn" onClick={() => setCurrentCardIndex(currentCardIndex - 1)}>Previous</button>
            )}
            {currentCardIndex < cardsLength - 1 && (
                <button className="nav-btn" onClick={() => setCurrentCardIndex(currentCardIndex + 1)}>Next</button>
            )}
            <button className="quit-btn" onClick={() => navigate(`/decks/${deckId}`)}>Quit</button>
        </div>
    );
};

export default QuizButtons;