////////////////////////////////////////////////////////////////////////////////
//
// signup-view-component.jsx
//
// This React component implements the signup view of the Russian Flashcards
// application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';


const SignupView = (props) => {

    return(

        <section>
            <h3>Create account View</h3>
            <button onClick={() => props.history.push('/signin')}>Create Account</button>
            <button onClick={() => props.history.push('/')}>Return</button>            
        </section>
    );
}


export default SignupView