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




// Implements the main Russian Flascard application.
//
class App extends Component {

  constructor() {
    super();

    this.state = {
      // The intial message displayed in the status message area when the 
      // application begins. The initial message is a stub / placeholder 
      // for views to display the messages meaningful to them.
      message: 'Stub message.'
    };
  };


  // A callback function for child components in order to write status messages
  // to the StatusMessage component. This alters state which will cause a 
  // render to occur.
  //
  // message- The message to be written to the StatusMessage component.
  //
  displayStatusMessage = message => {
    this.setState({message: message});
  };


  // A React.js lifecycle method that renders the component.
  //
  render() {
    return (
      <main>
        <Route path='/' render={ () => {
          return (
            <StatusMessages message={this.state.message}/>
          );
        }} />
        <Route exact path='/' render={ ({history}) => {
          return (
            <HomeView displayStatusMessageMethod={this.displayStatusMessage}
                      history={history} />
         );
        }} />
        <Route exact path='/signup' render={ ({history}) => {
          return (
            <SignupView displayStatusMessageMethod={this.displayStatusMessage}
                      history={history} />
         );
        }} />        
        <Route exact path='/signin' render={ ({history}) => {
          return (
            <SigninView displayStatusMessageMethod={this.displayStatusMessage}
                      history={history} />
         );
        }} />        
        <Route exact path='/change-password' component={ChangePasswordView} />     
        <Route exact path='/options' render={ ({history}) => {
          return (
            <OptionsView displayStatusMessageMethod={this.displayStatusMessage}
                         history={history} />
         );
        }} />              
        <Route exact path='/create-flashcard' component={CreateFlashcardView} />   
        <Route exact path='/delete-flashcard' component={DeleteFlashcardView} />  
        <Route exact path='/update-flashcard' component={UpdateFlashcardView} />  
        <Route exact path='/view-flashcards' component={ViewFlashcardsView} />                                      
      </main>      
    );
  }
}

export default App;
