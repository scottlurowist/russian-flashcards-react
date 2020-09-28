////////////////////////////////////////////////////////////////////////////////
//
// view-flashcards-view-component.jsx
//
// This React component implements the view flashcards view of the Russian
// Flashcards application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';


const ViewFlashcardsView = (props) => {

    return(

        <section>
            <h3>View Flashcards</h3>
            <button onClick={() => props.history.push('/options')}>Return</button>
        </section>
    );
}


export default ViewFlashcardsView