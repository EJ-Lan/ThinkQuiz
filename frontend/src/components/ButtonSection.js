import { Link } from 'react-router-dom';

const ButtonSection = () => {
    return (
        <div className="buttons-section">
            <Link to="/" className="button">Home</Link>
            <Link to="/quiz" className="button">Quiz</Link>
        </div>
    );
}

export default ButtonSection;