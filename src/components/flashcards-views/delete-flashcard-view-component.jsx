////////////////////////////////////////////////////////////////////////////////
//
// delete-flashcard-view-component.jsx
//
// This React component implements the delete flashcard view of the Russian
// Flashcards application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';


const DeleteFlashcardView = (props) => {

    return(

        <section>
            <h3>Delete Flashcard</h3>
            <button onClick={() => props.history.push('/options')}>Return</button>
        </section>
    );
}


export default DeleteFlashcardView