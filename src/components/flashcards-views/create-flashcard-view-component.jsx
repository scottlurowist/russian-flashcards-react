////////////////////////////////////////////////////////////////////////////////
//
// create-flashcard-view-component.jsx
//
// This React component implements the create flashcard view of the Russian
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




// Implements the Create Flashcard view.
class CreateFlashcardView extends Component {

    constructor({displayStatusMessageMethod, history}) {
        
        super();

        this.state = {
            cyrillicInput: '',
            englishInput: '',
            disableCyrillicKeyboard: true
        };

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
        this.dataModel = new FlashcardsDataModel();
    }


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = () => {
        this.displayStatusMessageMethod('Create a Flashcard');
    }      


    // Handles the form submission which in turn invokes the web service to
    // create a flashcard. If successful, then we navigate to the options view.
    //
    // event - A React synthetic event that represents the form submission.
    //
    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await this.dataModel.createFlashcard(this.state.cyrillicInput,
                    this.state.englishInput, store.user.token);

            this.displayStatusMessageMethod(
                `The flashcard  - ${this.state.englishInput} / 
                ${this.state.cyrillicInput} -  was created successfully`);       
                
            this.setState({
                englishInput: '',
                cyrillicInput: ''
            });    
        }
        catch(exception) {
            this.displayStatusMessageMethod(exception.message);
        }
    };


    // A callback method passed to the Cyrillic keyboard component that
    // sets the state that represents a Russian word typed by the keyboard.
    // It takes a Cyrillic character and adds it as a suffix to the state
    // representing that word.
    //
    // cyrillicCharacter - a Cyrillic character typed by the CyrillicKeyboard
    //                     component.
    // 
    handleCyrillicKeyboardClick = cyrillicCharacter => {

        let newCyrillicInput ;

        // If we received the backspace character, then simply remove the 
        // last character from the existing russian word. Otherwise,
        // suffix the new character to the end of the input.
        if (cyrillicCharacter === 'назад') {
            newCyrillicInput = this.state.cyrillicInput.slice(0, -1);
        }
        else {
            newCyrillicInput = this.state.cyrillicInput + cyrillicCharacter;
        }
        this.setState({
            cyrillicInput: newCyrillicInput,
        });
    };


    // This is a do-nothing handler for the Cyrillic keyboard. Because that
    // keyboard is a softkeyboard, it does not raise an onChange event.
    // But React wants an onChange event otherwise we receive this error in the
    // JS console: Warning: Failed prop type: You provided a `value` prop to a
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


    handleOnBlur = event => {

        let controlName = event.target.name;
        let keyboardDisableState;
        
        if (controlName === "english") keyboardDisableState = false;
        else keyboardDisableState = true;

        this.setState({
            disableCyrillicKeyboard: keyboardDisableState
        });
    };


    handleOnFocus = event => {
    
        let controlName = event.target.name;
        let keyboardDisableState;

        if (controlName === "english") keyboardDisableState = true;
        else keyboardDisableState = false;

        this.setState({ 
            disableCyrillicKeyboard: keyboardDisableState
        })
    };   


    // A React.js lifecycle method that renders the component.
    //
    render() {
        
        return (
            <section className="input__controls">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="english-text" >
                                <Form.Label className="text-primary">
                                    English
                                </Form.Label>
                                <Form.Control type="text" 
                                              disabled={ false
                                                  //this.state.selectedLanguage === 'russian'
                                              }
                                              name="english"
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
                                              name="russian"
                                              onChange={this.handleEmptyCyrillicOnChange}
                                              onFocus={ this.handleOnFocus }
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
                            Create Flashcard / Создать карточку
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


export default CreateFlashcardView

