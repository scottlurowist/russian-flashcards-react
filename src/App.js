////////////////////////////////////////////////////////////////////////////////
//
// App.js
//
// This defines the application component. It drives the Russian Flashcards
// app.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import './App.css';
import { CyrillicKeyboard } from './components/cyrillic-keyboard/cyrillic-keyboard-component'



function App() {
  return (
    <main>
      <h1>Welcome To Russian Flashcards</h1>
      <CyrillicKeyboard />
    </main>
  );
}

export default App;
