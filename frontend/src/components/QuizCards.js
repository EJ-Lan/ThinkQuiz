import { useState } from 'react';

const QuizCards = ({ card }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div>
            {showAnswer ? <p>Answer: {card.answer}</p> : <p>Question: {card.question}</p>}
            <button onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? 'Show Question' : 'Reveal Answer'}
            </button>
        </div>
    );
};

export default QuizCards;