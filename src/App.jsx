////////////////////////////////////////////////////////////////////////////////
//
// App.js
//
// This defines the application component. It drives the Russian Flashcards
// app.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import StatusMessages from './components/status-messages/status-messages-component';
import HomeView from './components/home-view/home-view-component';
import SignupView from './components/signup-view/signup-view-component';
import SigninView from './components/signin-view/signin-view-component';
import OptionsView from './components/options-view/options-view-component';
import CreateFlashcardView from './components/flashcards-views/create-flashcard-view-component';
import DeleteFlashcardView from './components/flashcards-views/delete-flashcard-view-component';
import UpdateFlashcardView from './components/flashcards-views/update-flashcard-view-component';
import ViewFlashcardsView from './components/flashcards-views/view-flashcards-view-component';
// import InputField from './components/input-field/input-field-component';
// import CyrillicKeyboard from './components/cyrillic-keyboard/cyrillic-keyboard-component'


import './App.scss';




class App extends Component {

  constructor() {
    super();

    this.state = {
      cyrillicInput: ''
    };
  };

  
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
      <main>
        <Route path='/' component={StatusMessages} />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/signup' component={SignupView} />
        <Route exact path='/signin' component={SigninView} />
        <Route exact path='/options' component={OptionsView} />   
        <Route exact path='/create-flashcard' component={CreateFlashcardView} />   
        <Route exact path='/delete-flashcard' component={DeleteFlashcardView} />  
        <Route exact path='/update-flashcard' component={UpdateFlashcardView} />  
        <Route exact path='/view-flashcards' component={ViewFlashcardsView} />                                      
        {/* <h1>Welcome To Russian Flashcards</h1>
        <InputField id="cyrillic-text" label="русский"
                    type="text" placeholder="русский"
                    value={this.state.cyrillicInput}/>
        <CyrillicKeyboard keyboardPressHandler={ this.processKeyboardClick } /> */}
      </main>      
    );
  }
}

export default App;
