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
            englishInput: ''
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
        this.setState({
            cyrillicInput: this.state.cyrillicInput + cyrillicCharacter
        });
    };


    // Handles changes in the English input text control.
    //
    // event - A React synthetic event that has changes to the
    //         English input field.
    handleEnglishKeyboardChange = event => {
        this.setState({
            englishInput: event.target.value
        });
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
                                              onChange={
                                                  this.handleEnglishKeyboardChange
                                              }
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
                                              disabled={ false
                                                  //this.state.selectedLanguage === 'english'
                                              }
                                              value={this.state.cyrillicInput}/>                                           
                            </Form.Group>
                        </Col>                                                   
                    </Row>
                    <Row>
                        <Col>
                            <CyrillicKeyboard disabled={ false
                                                //his.state.selectedLanguage === 'english'
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

