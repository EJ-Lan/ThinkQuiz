import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DecksContext } from '../context/DecksContext';
import QuizCards from '../components/QuizCards';
import QuizButtons from '../components/QuizButtons';

const QuizPage = () => {
    const { deckId } = useParams();
    const { decks } = useContext(DecksContext);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const deck = decks.find(deck => deck._id === deckId);
    const cards = deck ? deck.cards : [];

    return (
        <div>
            {cards.length > 0 ? (
                <div>
                    <QuizCards card={cards[currentCardIndex]} />
                    <QuizButtons
                        currentCardIndex={currentCardIndex}
                        setCurrentCardIndex={setCurrentCardIndex}
                        cardsLength={cards.length}
                        deckId={deckId}
                    />
                </div>
            ) : (
                <p>No Cards Available</p>
            )}
        </div>
    );
};

export default QuizPage;