////////////////////////////////////////////////////////////////////////////////
//
// update-flashcard-view-component.jsx
//
// This React component implements the update flashcard view of the Russian
// Flashcards application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';


const UpdateFlashcardView = (props) => {

    return(

        <section>
            <h3>Update Flashcard</h3>
            <button onClick={() => props.history.push('/options')}>Return</button>
        </section>
    );
}


export default UpdateFlashcardView