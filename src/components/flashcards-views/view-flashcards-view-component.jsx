////////////////////////////////////////////////////////////////////////////////
//
// view-flashcards-view-component.jsx
//
// This React component implements the view flashcards view of the Russian
// Flashcards application. 
//
////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CyrillicKeyboard from '../cyrillic-keyboard/cyrillic-keyboard-component';

import './flashcards-views.scss'




// Implements the view Flashcard view.
class ViewFlashcardsView extends Component {

    constructor({displayStatusMessageMethod, history}) {
        
        super();

        // The state for this view.
        //
        // englishInput - The input text field value for English.
        // cyrillicInput - The input text field value for Russian.
        // selectedLanguage - The currently selected radio button
        //                    for the input language.
        //
        this.state = {
            cyrillicInput: '',
            englishInput: '',
            selectedLanguage: 'english'
        };

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
    }


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = () => {
        this.displayStatusMessageMethod('View flashcards - Select an input language');
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


    // Handles changes in the English input text control.
    //
    // event - A React synthetic event that has changes to the
    //         English input field.
    handleEnglishKeyboardChange = event => {
        this.setState({
            englishInput: event.target.value
        });
    };


    // A handler for the radio buttons which determine which language we are using
    // for our flashcard guess. This sets the selectedLanguage state and resets
    // the input text fields.
    //
    // event- A React synthetic event.
    // 
    handleOptionChange = event => {

        this.setState({
            cyrillicInput: '',
            englishInput: '',
            selectedLanguage: event.target.value
        });
    };


    // A React.js lifecycle method that renders the component.
    //
    render() {
        
        return (
            <section className="input__controls">
                <Form>
                    <Row>
                        <div className="form--centered">
                            <span id="span-language">Language / Язык:</span>
                            <Form.Check inline label="English" type="radio"
                                        id='view-english' name="selectedLanguage"
                                        className="text-primary"
                                        checked={this.state.selectedLanguage === "english"}
                                        onChange={this.handleOptionChange}
                                        value="english" />
                            <Form.Check inline label="русский" type="radio"
                                        id='view-russian' name="selectedLanguage"
                                        className="text-danger"
                                        checked={this.state.selectedLanguage === "russian"}
                                        onChange={this.handleOptionChange}
                                        value="russian" />                                        
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="english-text" >
                                <Form.Label className="text-primary">
                                    English
                                </Form.Label>
                                <Form.Control type="text" 
                                              disabled={
                                                  this.state.selectedLanguage === 'russian'
                                              }
                                              onChange={this.handleEnglishKeyboardChange}
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
                                              disabled={
                                                  this.state.selectedLanguage === 'english'
                                              }
                                              value={this.state.cyrillicInput}/>                                           
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CyrillicKeyboard disabled={
                                                this.state.selectedLanguage === 'english'
                                              }
                                              keyboardPressHandler={
                                                this.handleCyrillicKeyboardClick
                                              } />                            
                        </Col>                      
                    </Row>
                    <Row>
                        <Col className="buttons__actions">
                            <Button variant="primary" className="button__action">
                                Check / Проверить
                            </Button>
                            <Button variant="primary" className="button__action">
                                Next / Следующая карточка
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


export default ViewFlashcardsView