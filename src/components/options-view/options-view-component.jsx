////////////////////////////////////////////////////////////////////////////////
//
// options-view-component.jsx
//
// This React component implements the options view of the Russian Flashcards
// application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';


const OptionsView = (props) => {

    return(
        <section>
            <h3>Home View</h3>
            <button onClick={() => props.history.push('/view-flashcards')}>View Flashcards</button>
            <button onClick={() => props.history.push('/create-flashcard')}>Create Flashcard</button> 
            <button onClick={() => props.history.push('/update-flashcard')}>Update Flashcard</button> 
            <button onClick={() => props.history.push('/delete-flashcard')}>Delete Flashcard</button> 
            <button onClick={() => props.history.push('/')}>Exit App</button>                                                
        </section>
    );
}


export default OptionsView