////////////////////////////////////////////////////////////////////////////////
//
// status-messages-component.jsx
//
// This React component implements the view of the Russian Flashcards
// application that is always shown to the user and from which the user can
// see status messages from the application.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';




// Implements the StatusMessages component.
//
// message - The message to be displayed in the status message component.
//
//
const StatusMessages = ({message}) => {

    return (
        <p className="status-notification-message-area">{message}</p>
    );
}


export default StatusMessages