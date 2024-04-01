import { useState } from 'react';

const QuizCards = ({ card, showAnswer, setShowAnswer }) => {
    return (
        <div className="card">
            {showAnswer ? <p style={{opacity: showAnswer ? 1 : 0}}>Answer: {card.answer}</p> : <p style={{opacity: showAnswer ? 0 : 1}}>Question: {card.question}</p>}
            <button className="toggle-btn" onClick={() => setShowAnswer(!showAnswer)}>
                {showAnswer ? 'Show Question' : 'Reveal Answer'}
            </button>
        </div>
    );
};

export default QuizCards;