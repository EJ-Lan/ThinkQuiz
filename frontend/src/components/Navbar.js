import { Link, useLocation } from 'react-router-dom'
import ButtonSection from './ButtonSection';

const Navbar = () => {
    const location = useLocation();
    
    return ( 
        <header>
            <div className="container">
                <Link to="/" className="button">
                    <h1>Think Quiz</h1>
                </Link>
                {location.pathname.includes('/decks/') && <ButtonSection />}
            </div>
        </header>
     );
}
 
export default Navbar;