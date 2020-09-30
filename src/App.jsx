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

import StatusMessages from
  './components/status-messages/status-messages-component';
import HomeView from './components/home-view/home-view-component';
import SignupView from './components/signup-view/signup-view-component';
import SigninView from './components/signin-view/signin-view-component';
import ChangePasswordView from
  './components/change-password-view/change-password-view-component';
import OptionsView from './components/options-view/options-view-component';
import CreateFlashcardView from
  './components/flashcards-views/create-flashcard-view-component';
import DeleteFlashcardView from
  './components/flashcards-views/delete-flashcard-view-component';
import UpdateFlashcardView from
  './components/flashcards-views/update-flashcard-view-component';
import ViewFlashcardsView from
  './components/flashcards-views/view-flashcards-view-component';

import './App.scss';




class App extends Component {

  constructor() {
    super();

    this.state = {
      // The intial message displayed in the status message area when the 
      // application begins.
      message: 
        "Welcome to Russian Flashcards / добро пожаловать в карточки на русском"
    };
  };


  render() {
    return (
      <main>
        <Route path='/' render={ () => {
          return (
            <StatusMessages message={this.state.message}/>
          )
        }} />
        <Route exact path='/' component={HomeView} />
        <Route exact path='/signup' component={SignupView} />
        <Route exact path='/signin' component={SigninView} />
        <Route exact path='/change-password' component={ChangePasswordView} />        
        <Route exact path='/options' component={OptionsView} />   
        <Route exact path='/create-flashcard' component={CreateFlashcardView} />   
        <Route exact path='/delete-flashcard' component={DeleteFlashcardView} />  
        <Route exact path='/update-flashcard' component={UpdateFlashcardView} />  
        <Route exact path='/view-flashcards' component={ViewFlashcardsView} />                                      
      </main>      
    );
  }
}

export default App;
