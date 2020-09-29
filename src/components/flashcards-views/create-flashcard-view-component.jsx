////////////////////////////////////////////////////////////////////////////////
//
// create-flashcard-view-component.jsx
//
// This React component implements the create flashcard view of the Russian
// Flashcards application. 
//
////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

import InputField from '../input-field/input-field-component';
import CyrillicKeyboard from '../cyrillic-keyboard/cyrillic-keyboard-component';

import './flashcards-views.scss'




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
            <section className="input__controls">
                <div>
                    <InputField id="create-english-text" label="English"
                                type="text" placeholder="English" />                
                    <InputField id="create-cyrillic-text" label="русский"
                                type="text" placeholder="русский"
                                value={this.state.cyrillicInput}/>
                </div>

                <CyrillicKeyboard keyboardPressHandler={ this.processKeyboardClick } />

                <div className="buttons__actions">
                    <Button variant="primary" className="button__action">
                        Create Flashcard / Создать карточку
                    </Button>
                    <Button variant="primary" className="button__action"
                            onClick={() => this.props.history.push('/options')}>
                        Return / вернуться
                    </Button>
                </div>
            </section>
        );
    }
}


export default CreateFlashcardView