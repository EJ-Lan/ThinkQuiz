import { useEffect } from 'react'
import { useDecksContext } from '../hooks/useDeckContext'

import DeckDetails from '../components/DeckDetails'
import DeckForm from '../components/DeckForm'

const Home = () => {
    const { decks, dispatch } = useDecksContext()

    useEffect(() => {
        const fetchDecks = async () => {
            const response = await fetch('http://localhost:4000/api/decks');
            if (response.ok) {
                const text = await response.text();
                try {
                    const json = JSON.parse(text);
                    dispatch({ type: 'SET_DECKS', payload: json });
                } catch (error) {
                    console.error('Failed to parse JSON: ', error);
                }
            } else {
                console.error('Failed to fetch decks: ', response.statusText);
            }
        };
    
        fetchDecks();
    }, [dispatch]);
    return ( 
        <div className="home">
            <div className="decks">
                {decks && decks.length > 0 ? (
                    decks.map(deck => (
                        <DeckDetails deck={deck} key={deck._id} />
                    ))
                ) : (
                    <div className="no-decks">
                        <h2>There Are No Decks</h2>
                    </div>
                )}
            </div>
            <DeckForm />
        </div>
     );
}
 
export default Home;