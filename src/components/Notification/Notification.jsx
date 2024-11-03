import React from 'react';
import './Notification.module.css';

const Notification = ({ message }) => {
    return (
        <div className="notification">
            <p>{message}</p>
        </div>
    );
};

export default Notification;