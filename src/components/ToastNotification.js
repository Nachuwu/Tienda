import React, { useState, useEffect } from 'react';

const ToastNotification = ({ message }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (message) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className={`toast-notification ${show ? 'show' : ''}`}>
            {message}
        </div>
    );
};

export default ToastNotification;
