import { useState } from 'react';

const QuizCards = ({ card }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="card">
            {showAnswer ? <p>Answer: {card.answer}</p> : <p>Question: {card.question}</p>}
            <button className="toggle-btn" onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? 'Show Question' : 'Reveal Answer'}
            </button>
        </div>
    );
};

export default QuizCards;