////////////////////////////////////////////////////////////////////////////////
//
// create-flashcard-view-component.jsx
//
// This React component implements the create flashcard view of the Russian
// Flashcards application. 
//
////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';

import InputField from '../input-field/input-field-component';
import CyrillicKeyboard from '../cyrillic-keyboard/cyrillic-keyboard-component'




// Implements the Create Flashcard view.
class CreateFlashcardView extends Component {

    constructor(props) {
        
        super();

        this.state = {
            cyrillicInput: ''
        };
    }


    // A callback method passed to the Cyrillic keyboard component that
    // sets the state that represents a Russian word typed by the keyboard.
    // It takes a Cyrillic character and adds it as a suffix to the state
    // representing that word.
    //
    // cyrillicCharacter - a Cyrillic character typed by the CyrillicKeyboard
    //                     component.
    // 
    processKeyboardClick = cyrillicCharacter => {

        this.setState({cyrillicInput: this.state.cyrillicInput + cyrillicCharacter});
    }


    render() {
        
        return (
            <section>
                <InputField id="create-english-text" label="English"
                            type="text" placeholder="English" />                
                <InputField id="create-cyrillic-text" label="русский"
                            type="text" placeholder="русский"
                            value={this.state.cyrillicInput}/>
                <CyrillicKeyboard keyboardPressHandler={ this.processKeyboardClick } />

                <button onClick={() => this.props.history.push('/options')}>Return</button>
            </section>
        );
    }
}


export default CreateFlashcardView