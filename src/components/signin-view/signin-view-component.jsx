////////////////////////////////////////////////////////////////////////////////
//
// signin-view-component.jsx
//
// This React component implements the signin view of the Russian Flashcards
// application. 
//
////////////////////////////////////////git ////////////////////////////////////////


import React from 'react';


const SigninView = (props) => {

    return(
        <section>
            <h3>Sign in View</h3>
            <button onClick={() => props.history.push('/options')}>Signin</button>
            <button onClick={() => props.history.push('/')}>Return</button>            
        </section>
    );
}


export default SigninView