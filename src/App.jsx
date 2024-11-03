import React, { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback'; 
import Options from './components/Options/Options'; 
import Notification from './components/Notification/Notification';
import Description from './components/Description/Description'

const App = () => {
    const [ratings, setRatings] = useState(() => {
        const savedRatings = localStorage.getItem('ratings');
        
        return savedRatings ? JSON.parse(savedRatings) : { good: 0, neutral: 0, bad: 0 };
    });

    const updateFeedback = (feedbackType) => {
        setRatings((prevRatings) => {
            const newRatings = {
                ...prevRatings,
                [feedbackType]: prevRatings[feedbackType] + 1
            };
            
            localStorage.setItem('ratings', JSON.stringify(newRatings));
            return newRatings;
        });
    };

    const resetFeedback = () => {
        setRatings({ good: 0, neutral: 0, bad: 0 });
        localStorage.removeItem('ratings'); 
    };

    
    useEffect(() => {
        localStorage.setItem('ratings', JSON.stringify(ratings));
    }, [ratings]);

    const totalFeedback = ratings.good + ratings.neutral + ratings.bad;
    const positivePercentage = totalFeedback > 0 ? Math.round((ratings.good / totalFeedback) * 100) : 0;

    return (
        <div>
             <Description/>
            <Options 
                updateFeedback={updateFeedback} 
                resetFeedback={resetFeedback} 
                totalFeedback={totalFeedback} 
            />
            {totalFeedback > 0 ? (
                <>
                    <Feedback ratings={ratings} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
                </>
            ) : (
                <Notification message="No feedback given yet." />
            )}
        </div>
    );
};

export default App;