////////////////////////////////////////////////////////////////////////////////
//
// App.js
//
// This defines the application component. It drives the Russian Flashcards
// app.
//
////////////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import { CyrillicKeyboard } from './components/cyrillic-keyboard/cyrillic-keyboard-component'


import './App.css';




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
        <h1>Welcome To Russian Flashcards</h1>
        <input type="text" value={this.state.cyrillicInput}/>
        <CyrillicKeyboard keyboardPressHandler={ this.processKeyboardClick } />
      </main>
    );
  }
}

export default App;
