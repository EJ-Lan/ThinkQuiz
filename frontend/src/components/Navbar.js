import { Link, useLocation } from 'react-router-dom'
import ButtonSection from './ButtonSection';

const Navbar = () => {
    const location = useLocation();
    const deckId = location.pathname.split('/')[2]; // Extract deckId from URL
    
    return ( 
        <header>
            <div className="container">
                <Link to="/" className="button">
                    <h1>Think Quiz</h1>
                </Link>
                {location.pathname.includes('/decks/') && <ButtonSection deckId={deckId} />}
            </div>
        </header>
     );
}
 
export default Navbar;