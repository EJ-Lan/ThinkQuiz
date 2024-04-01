import { useNavigate } from 'react-router-dom';

const QuizButtons = ({ currentCardIndex, setCurrentCardIndex, cardsLength, deckId, setShowAnswer }) => {
    const navigate = useNavigate();

    const handleNavigation = (newIndex) => {
        setCurrentCardIndex(newIndex);
        setShowAnswer(false);
    };

    return (
        <div className="button-container">
            {currentCardIndex > 0 && (
                <button className="nav-btn" onClick={() => handleNavigation(currentCardIndex - 1)}>Previous</button>
            )}
            {currentCardIndex < cardsLength - 1 && (
                <button className="nav-btn" onClick={() => handleNavigation(currentCardIndex + 1)}>Next</button>
            )}
            <button className="quit-btn" onClick={() => navigate(`/decks/${deckId}`)}>Quit</button>
        </div>
    );
};

export default QuizButtons;