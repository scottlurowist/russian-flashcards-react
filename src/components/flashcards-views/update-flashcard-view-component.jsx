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

import './flashcards-views.scss'




// Implements the Update Flashcard view.
class UpdateFlashcardView extends Component {

    constructor({displayStatusMessageMethod, history}) {
        
        super();

        this.state = {
            cyrillicInput: '',
            englishInput: ''
        };

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
    }


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = () => {
        this.displayStatusMessageMethod('Update a Flashcard');
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


    // A React.js lifecycle method that renders the component.
    //
    render() {
        
        return (
            <section className="input__controls">
                <Form>
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

