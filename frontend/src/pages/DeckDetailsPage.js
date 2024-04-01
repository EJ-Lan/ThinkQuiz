import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCardsContext } from '../hooks/useCardsContext'; 
import CardDetails from '../components/CardDetails';
import CardForm from '../components/CardForm';

const DeckDetailsPage = () => {
    const { deckId } = useParams();
    const { cards } = useCardsContext();
    const [deck, setDeck] = useState(null);

    useEffect(() => {
        const fetchDeck = async () => {
            const response = await fetch(`http://localhost:4000/api/decks/${deckId}`);
            if (response.ok) {
                const json = await response.json();
                setDeck(json);
            } else {
                console.error('Failed to fetch deck: ', response.statusText);
            }
        };

        fetchDeck();
    }, [deckId, cards]); 

    return (
        <div className="home">
            <div className="decks">
                {deck && deck.cards.length > 0 ? (
                    deck.cards.map(card => (
                        <CardDetails card={card} key={card._id} />
                    ))
                ) : (
                    <div className="no-decks">
                        <h2>There Are No Cards</h2>
                    </div>
                )}
            </div>
            <CardForm deckId={deckId} /> {/* Pass deckId as a prop */}
        </div>
    );
}

export default DeckDetailsPage;