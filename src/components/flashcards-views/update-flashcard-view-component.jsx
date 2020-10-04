////////////////////////////////////////////////////////////////////////////////
//
// update-flashcard-view-component.jsx
//
// This React component implements the update flashcard view of the Russian
// Flashcards application. 
//
////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CyrillicKeyboard from '../cyrillic-keyboard/cyrillic-keyboard-component';

import store from './../../store';
import FlashcardsDataModel from './../../models/data-model';

import './flashcards-views.scss'




// Implements the Update Flashcard view.
class UpdateFlashcardView extends Component {

    constructor({displayStatusMessageMethod, history}) {
        
        super();

        this.state = {
            cyrillicInput: '',
            englishInput: '',
            flashcards: [],
            disableCyrillicKeyboard: true
        };

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
        this.dataModel = new FlashcardsDataModel();  
        this.selectedFlashcard = null;      
    }


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = async () => {
        this.displayStatusMessageMethod(
            'Update a Flashcard - select a flashcard to update');

        try {
            const response = 
                await this.dataModel.getAllFlashcards(store.user.token);

            this.setState({flashcards: response.data.flashcards} );     
        }   
        catch(exception) {
            this.displayStatusMessageMethod(exception.message);
        }
    }      


    // A callback method passed to the Cyrillic keyboard component that
    // sets the state that represents a Russian word typed by the keyboard.
    // It takes a Cyrillic character and adds it as a suffix to the state
    // representing that word.
    //
    // cyrillicCharacter - a Cyrillic character typed by the CyrillicKeyboard
    //                     component.
    // 
    handleCyrillicKeyboardClick = cyrillicCharacter => {
        this.setState({
            cyrillicInput: this.state.cyrillicInput + cyrillicCharacter
        });
    };


    // This is a do-nothing handler for the Cyrillic keyboard. Because that
    // keyboard is a softkeyboard, it does not raise an onChange event.
    // But React wants an onChange event other we get this error in the JS
    // console: Warning: Failed prop type: You provided a `value` prop to a
    // form field without an `onChange` handler. This will render a read-only
    // field. If the field should be mutable use `defaultValue`. Otherwise, set
    // either `onChange` or `readOnly`.
    handleEmptyCyrillicOnChange = () => {};    


    // Handles changes in the English input text control.
    //
    // event - A React synthetic event that has changes to the
    //         English input field.
    handleEnglishKeyboardChange = event => {
        this.setState({
            englishInput: event.target.value
        });
    };


    handleFlashcardSelected = event => {
        
        let selectedElement;
        
        // You can either click the SPAN or the parent DIV.
        // Handle both cases.
        if (event.target.tagName === 'SPAN') {
            selectedElement = event.target.parentElement;
        }
        else {
            selectedElement = event.target;
        }

        // This saves the flashcard database ID and the words.
        // We need the ID when we save the updates.
        this.selectedFlashcard = selectedElement;

        // Our words are in a span element and appear as 
        // englishWord / russianWord.
        const words = selectedElement.innerText.split('/');

        console.log(words)
        // Now use state databinding to load the words into the input fields.
        this.setState({
            englishInput: words[0].trim(),
            cyrillicInput: words[1].trim()
        });
    };

    handleOnBlur = event => {
        this.setState({
            disableCyrillicKeyboard: false
        });
    };


    handleOnFocus = event => {
        this.setState({ 
            disableCyrillicKeyboard: true
        })
    };


    // Handles the form submission which in turn invokes the web service to
    // update a flashcard. 

    // event - A React synthetic event that represents the form submission.
    //
    handleSubmit = async (event) => {
        event.preventDefault();

        try {

            const id = this.selectedFlashcard.id;

            await this.dataModel.updateFlashcard(
                id,
                this.state.cyrillicInput,
                this.state.englishInput,
                store.user.token
            );

            // Loop through our flashcards and find the flashcard that was 
            // updated. We need to update it. Since it is in state, the 
            // list of flashcards should re-render.
            //
            // TODO: Make this more efficient.
            const flashcards = this.state.flashcards;

            for (let flashcard of flashcards) {

                if (flashcard._id === id) {
                    flashcard.englishWord = this.state.englishInput;
                    flashcard.russianWord = this.state.cyrillicInput;
                    break;
                }
            }

            // This will cause the flashcards to re-render since the state of 
            // one of the flashcards has changed.
            this.state.flashcards = flashcards;

            this.displayStatusMessageMethod(
                `The flashcard  - ${this.state.englishInput} / 
                ${this.state.cyrillicInput} -  was updated successfully`);    
                
            this.setState({
                cyrillicInput: '',
                englishInput: ''
            });    
        }
        catch(exception) {
            this.displayStatusMessageMethod(exception.message);
        }
    };


    // A React.js lifecycle method that renders the component.
    //
    render() {
        
        return (
            <section className="input__controls">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <div className="scrollable-flashcards">
                                {this.state.flashcards.map(currentFlashcard =>
                                    <div key={ currentFlashcard._id }
                                        //  Use the ID property to encode our flashcard so that we
                                        // know which flashcard to update.
                                        id={ currentFlashcard._id }
                                        className="flashcard"
                                        onClick={this.handleFlashcardSelected}>
                                        <span>
                                            {currentFlashcard.englishWord} / {currentFlashcard.russianWord}
                                        </span>              
                                    </div>
                                )}    
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="english-text" >
                                <Form.Label className="text-primary">
                                    English
                                </Form.Label>
                                <Form.Control type="text" 
                                              disabled={ false }
                                              onChange={
                                                  this.handleEnglishKeyboardChange
                                              }
                                              onBlur={ this.handleOnBlur }
                                              onFocus={ this.handleOnFocus }                                              
                                              value={this.state.englishInput}
                                              placeholder='English' />
                            </Form.Group> 
                        </Col>
                        <Col>
                            <Form.Group controlId="russian-text" >  
                                <Form.Label className="text-danger">
                                    русский
                                </Form.Label>
                                <Form.Control type="text" placeholder='русский'
                                              disabled={ false }
                                              onChange={ this.handleEmptyCyrillicOnChange }
                                              value={this.state.cyrillicInput}/>                                           
                            </Form.Group>
                        </Col>                                                   
                    </Row>
                    <Row>
                        <Col>
                            <CyrillicKeyboard disabled={ 
                                                this.state.disableCyrillicKeyboard
                                              }
                                              keyboardPressHandler={
                                                this.handleCyrillicKeyboardClick
                                              } />                            
                        </Col>
                    </Row>
                    <Row>
                        <Col className="buttons__actions">
                            <Button variant="primary"
                                    type="submit"
                                    disabled={this.state.englishInput === '' ||
                                              this.state.cyrillicInput === ''}
                                    className="button__action">
                                Update Flashcard / Обновить карточку
                            </Button>
                                <Button variant="primary" className="button__action"
                                    onClick={() => this.props.history.push('/options')}>
                                Return / вернуться
                            </Button>   
                        </Col>
                    </Row>
                </Form>
            </section>
        );
    }
}


export default UpdateFlashcardView

