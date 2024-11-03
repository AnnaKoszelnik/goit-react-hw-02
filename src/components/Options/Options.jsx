import React from 'react';
import './Options.module.css'; 

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
        <div className="options-container">
            <h2 className="options-title">Choose your rating</h2>
            <button className="options-button" onClick={() => updateFeedback('good')}>Good</button>
            <button className="options-button" onClick={() => updateFeedback('neutral')}>Neutral</button>
            <button className="options-button" onClick={() => updateFeedback('bad')}>Bad</button>
            {totalFeedback > 0 && ( // Wyświetl przycisk Reset tylko, jeśli są jakieś oceny
                <button className="options-button" onClick={resetFeedback}>Reset</button>
            )}
        </div>
    );
};

export default Options;


