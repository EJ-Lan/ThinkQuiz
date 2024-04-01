import { Link } from 'react-router-dom';

const ButtonSection = ({ deckId }) => {
    return (
        <div className="buttons-section">
            <Link to="/" className="button">Home</Link>
            <Link to={`/decks/${deckId}/quiz`} className="button">Quiz</Link>
        </div>
    );
}

export default ButtonSection;