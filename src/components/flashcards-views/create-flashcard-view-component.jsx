////////////////////////////////////////////////////////////////////////////////
//
// create-flashcard-view-component.jsx
//
// This React component implements the create flashcard view of the Russian
// Flashcards application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';


const CreateFlashcardView = (props) => {

    return(

        <section>
            <h3>Create Flashcard</h3>
            <button onClick={() => props.history.push('/options')}>Return</button>
        </section>
    );
}


export default CreateFlashcardView