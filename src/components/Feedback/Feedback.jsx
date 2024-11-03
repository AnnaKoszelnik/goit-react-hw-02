import React from 'react';
import './Feedback.module.css'; 

const Feedback = ({ ratings, totalFeedback, positivePercentage }) => {
    return (
        <div className="feedback-container">
            <h2 className="feedback-title">Feedback Summary</h2>
            <p>Good: {ratings.good}</p>
            <p>Neutral: {ratings.neutral}</p>
            <p>Bad: {ratings.bad}</p>
            <p>Total Feedback: {totalFeedback}</p>
            <p>Positive Feedback: {positivePercentage}%</p>
        </div>
    );
};

export default Feedback;