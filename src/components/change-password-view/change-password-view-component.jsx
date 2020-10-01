////////////////////////////////////////////////////////////////////////////////
//
// change-password-view-component.jsx
//
// This React component implements the change password view of the Russian
// Flashcards application. 
//
////////////////////////////////////////git ////////////////////////////////////////


import React from 'react';


const ChangePasswordView = (props) => {

    return(
        <section>
            <h3>Change Password View</h3>
            <button onClick={() => props.history.push('/options')}>Signin</button>
            <button onClick={() => props.history.push('/')}>Return</button>            
        </section>
    );
}


export default ChangePasswordView