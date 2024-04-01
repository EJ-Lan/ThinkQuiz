import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DecksContext } from '../context/DecksContext';
import { CardsContext } from '../context/CardsContext'; 
import QuizCards from '../components/QuizCards';
import QuizButtons from '../components/QuizButtons';

const QuizPage = () => {
    const { deckId } = useParams();
    const { decks } = useContext(DecksContext);
    const { cards: allCards, dispatch } = useContext(CardsContext); 
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/cards');
                const json = await response.json();

                if (response.ok) {
                    dispatch({ type: 'SET_CARDS', payload: json });
                } else {
                    setError(json.message);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchCards();
    }, [dispatch]);

    const deck = decks ? decks.find(deck => deck._id === deckId) : null;
    const cards = deck ? allCards.filter(card => card.deck === deckId) : []; 

    return (
        <div>
            {cards.length > 0 ? (
                <div className="quiz-page">
                    <QuizCards card={cards[currentCardIndex]} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
                    <QuizButtons
                        currentCardIndex={currentCardIndex}
                        setCurrentCardIndex={setCurrentCardIndex}
                        cardsLength={cards.length}
                        deckId={deckId}
                        setShowAnswer={setShowAnswer}
                    />
                </div>
            ) : (
                <p className="no-cards">No Cards Available</p>
            )}
        </div>
    );
};

export default QuizPage;