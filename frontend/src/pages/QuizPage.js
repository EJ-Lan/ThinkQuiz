import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DecksContext } from '../context/DecksContext';
import { CardsContext } from '../context/CardsContext'; 
import QuizCards from '../components/QuizCards';
import QuizButtons from '../components/QuizButtons';

const QuizPage = () => {
    const { deckId } = useParams();
    const { decks } = useContext(DecksContext);
    const { cards: allCards } = useContext(CardsContext); 
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

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