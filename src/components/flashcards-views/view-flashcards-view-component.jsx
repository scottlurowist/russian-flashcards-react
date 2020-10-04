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
import store from './../../store';
import FlashcardsDataModel from './../../models/data-model';

import './flashcards-views.scss'




// Implements the view Flashcard view.
//
class ViewFlashcardsView extends Component {

    constructor({displayStatusMessageMethod, history}) {
        
        super();

        // The state for this view.
        //
        // englishInput - The input text field value for English.
        // cyrillicInput - The input text field value for Russian.
        // selectedLanguage - The currently selected radio button
        //                    for the input language.
        // startButtonDisabled - When true, the start button is disabled.
        // checkButtonDisabled - When true, the check button is disabled.
        // nextButtonDisabled - When true, the next button is disabled.
        // radioButtonsDisabled - When true, the radio buttons are disabled.
        this.state = {
            cyrillicInput: '',
            englishInput: '',
            selectedLanguage: 'english',
            startButtonDisabled: false,
            checkButtonDisabled: true,
            nextButtonDisabled: true,
            radioButtonsDisabled: false
        };

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
        this.dataModel = new FlashcardsDataModel();
        this.flashcards = [];
        this.flashcardNumberCurrentlyShown = 0;
    };


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = () => {
        this.displayStatusMessageMethod(
            'View flashcards - Select an input language and then select "Start"');
    };
    

    // Handles the check button click that checks whether the English word
    // is the correct translation for the Russian word. it also sets 
    // state so that button state for check and next is correct.
    //
    // event - A React synthetic event that represents the form submission.
    //
    handleCheckAnswerButton = (event) => {
        event.preventDefault();

        if ((this.state.englishInput === 
                this.flashcards[this.flashcardNumberCurrentlyShown].englishWord) &&
            (this.state.cyrillicInput === 
                this.flashcards[this.flashcardNumberCurrentlyShown].russianWord)) {

                this.displayStatusMessageMethod(
                    `Correct: < ${this.state.englishInput} > is < ${this.state.cyrillicInput} >.` +
                    " Change the input language and/or select 'Next'");
                
                this.setState( {
                    checkButtonDisabled: true,
                    nextButtonDisabled: false,
                    radioButtonsDisabled: false    
                });
        }
        else {
            this.displayStatusMessageMethod(
                "Your answer is not correct. Please try again or select 'Next'."); 
                
                this.setState( {
                    checkButtonDisabled: false,
                    nextButtonDisabled: false,
                    radioButtonsDisabled: true    
                });                
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
            checkButtonDisabled: this.shouldCheckButtonBeDisabled()
        });
    };


    // Handles changes in the English input text control. This is required 
    // since the input control is "controlled" by React since it is bound to
    // state.
    //
    // event - A React synthetic event that has changes to the
    //         English input field.
    //
    handleEnglishKeyboardChange = event => {

        this.setState({
            englishInput: event.target.value,
            checkButtonDisabled: this.shouldCheckButtonBeDisabled()
        });
    };


    // Handles the next button click that loads the next entry in the 
    // list of flasccards. It also sets the appropriate disabled
    // state for the start and check buttons, as well as itself.
    //
    // event - A React synthetic event that represents the form submission.
    //    
    handleNextButton = (event) => {
        event.preventDefault();

        this.flashcardNumberCurrentlyShown++;

        if (this.flashcardNumberCurrentlyShown < this.flashcards.length) {
            
            // It is easiet to just cler both fields and overwrite them to reduce
            // logic in the code.
            this.setState({cyrillicInput: '', englishInput: ''});

            let currentEnglishWord = 
                this.flashcards[this.flashcardNumberCurrentlyShown].englishWord;
            let currentRussianWord = 
                this.flashcards[this.flashcardNumberCurrentlyShown].russianWord;    
        
            let statusMessage;

            if (this.state.selectedLanguage === 'english') {
                this.setState({
                    cyrillicInput: currentRussianWord
                });

                statusMessage =
                    `What is the English word for ${currentRussianWord}?`;
            }   
            else if (this.state.selectedLanguage === 'russian') {
                this.setState({
                    englishInput: currentEnglishWord
                });

                statusMessage =
                    `What is the Russian word for ${currentEnglishWord}?`;
            } 

            this.displayStatusMessageMethod(statusMessage);    
            
            this.setState({
                radioButtonsDisabled: true              
            });            
        }
        else {
            this.displayStatusMessageMethod(
                    "No more cards. Select 'Start' to" +
                    " view again or select 'Return' to exit to options");
            
            this.setState({
                startButtonDisabled: false,
                checkButtonDisabled: true,
                nextButtonDisabled: true,  
                radioButtonsDisabled: false              
            });
        }
                
        this.setState( {
            checkButtonDisabled: true,
            nextButtonDisabled: true    
        });              

    };


    // Handles the radio buttons which determine which language we are using
    // for our flashcard guess. This sets the selectedLanguage state .
    //
    // event- A React synthetic event.
    // 
    handleLanguageOptionChange = event => {

        this.setState({
            cyrillicInput: '',
            englishInput: '',
            selectedLanguage: event.target.value
        });
    };


    // Handles the form submission which in turn invokes the web service to
    // get all flashcards and load the first flashcard into the view.
    //
    // event - A React synthetic event that represents the form submission.
    //
    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = 
                await this.dataModel.getAllFlashcards(store.user.token);

            this.flashcards = response.data.flashcards;

            if (this.flashcards.length === 0) {
                
                this.displayStatusMessageMethod(
                    "There are no flashcards. You must create at least one flashcard to view them");
                    
                return;    
            }
           
            this.flashcardNumberCurrentlyShown = 0;    

            let currentEnglishWord = 
                this.flashcards[this.flashcardNumberCurrentlyShown].englishWord;

            let currentRussianWord = 
                this.flashcards[this.flashcardNumberCurrentlyShown].russianWord;  

            let statusMessage;
              
            if (this.state.selectedLanguage === 'english') {
                this.setState({
                    cyrillicInput: currentRussianWord,
                    englishInput: ''
                });

                statusMessage =
                    `What is the English word for ${currentRussianWord}?`;
            }   
            else if (this.state.selectedLanguage === 'russian') {
                this.setState({
                    cyrillicInput: '',
                    englishInput: currentEnglishWord
                });

                statusMessage =
                    `What is the Russian word for ${currentEnglishWord}?`;
            } 

            this.displayStatusMessageMethod(statusMessage); 

            this.setState({
                startButtonDisabled: true,
                radioButtonsDisabled: true
             });
        }
        catch(exception) {
            this.displayStatusMessageMethod(exception.message);
        }
    };


    // Determines the condition by which the check button is disabled. The
    // button should only be enabled when both the English and Russian
    // input fields are populated.
    //
    shouldCheckButtonBeDisabled = () => {

        let buttonState = false;

        if (this.state.englishInput === '' ||
            this.state.cyrillicInput === '') {
            
            buttonState = true;                 
        }

        this.setState({ checkButtonDisabled: buttonState }); 
    };


    // A React.js lifecycle method that renders the component.
    //
    render() {
        
        return (
            <section className="input__controls">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <div className="form--centered">
                            <span id="span-language">Language / Язык:</span>
                            <Form.Check inline label="English" type="radio"
                                        id='view-english' name="selectedLanguage"
                                        className="text-primary"
                                        disabled={ this.state.radioButtonsDisabled }
                                        checked={
                                            this.state.selectedLanguage === "english"
                                        }
                                        onChange={ this.handleLanguageOptionChange }
                                        value="english" />
                            <Form.Check inline label="русский" type="radio"
                                        id='view-russian' name="selectedLanguage"
                                        className="text-danger"
                                        disabled={ this.state.radioButtonsDisabled }
                                        checked={
                                            this.state.selectedLanguage === "russian"
                                        }
                                        onChange={ this.handleLanguageOptionChange }
                                        value="russian" />  
                            <Button variant="primary" 
                                    disabled={ this.state.startButtonDisabled }  
                                    type="submit"
                                    className="button__action">
                                Start / Проверить
                            </Button>                                                  
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
                                              onChange={ this.handleEnglishKeyboardChange }
                                              value={ this.state.englishInput }
                                              placeholder='English' />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="russian-text" >  
                                <Form.Label className="text-danger">
                                    русский
                                </Form.Label>
                                <Form.Control type="text" 
                                              placeholder='русский'
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
                            <Button variant="primary" 
                                    disabled={ this.state.checkButtonDisabled }
                                    onClick={ this.handleCheckAnswerButton }
                                    className="button__action">
                                Check / Проверить
                            </Button>
                            <Button variant="primary"
                                    disabled={ this.state.nextButtonDisabled }
                                    onClick={ this.handleNextButton } 
                                    className="button__action">
                                Next / Следующая карточка
                            </Button>    
                            <Button variant="primary" className="button__action"
                                    onClick={ 
                                        () => this.props.history.push('/options')
                                    }>
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