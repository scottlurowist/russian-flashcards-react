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


  render() {
    return (
      <main>
        <h1>Welcome To Russian Flashcards</h1>
        <input type="text" value={this.state.cyrillicInput}/>
        <CyrillicKeyboard keyboardPressHandler={e => {
              this.setState({cyrillicInput: this.state.cyrillicInput + e.target.textContent })
            }
          }
        />
      </main>
    );
  }
}

export default App;
