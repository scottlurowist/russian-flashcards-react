////////////////////////////////////////////////////////////////////////////////
//
// home-view-component.jsx
//
// This React component implements the home view of the Russian Flashcards
// application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';




const HomeView = (props) => {

    return(

        <section>
            <h3>Home View</h3>
            <button onClick={() => props.history.push('/signup')}>Create Account</button>
            <button onClick={() => props.history.push('/signin')}>Signin</button>            
        </section>
    );
}


export default HomeView