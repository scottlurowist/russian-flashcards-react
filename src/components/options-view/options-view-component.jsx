////////////////////////////////////////////////////////////////////////////////
//
// options-view-component.jsx
//
// This React component implements the options view of the Russian Flashcards
// application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Button from 'react-bootstrap/Button';

import store from './../../store';
import FlashcardsDataModel from './../../models/data-model';

import './options-view-component.scss';



// Implements the Options view.
//

//
class OptionsView extends React.Component {

    // displayStatusMessageMethod - A callback function to a method that can display
    //                              messages to a status message area.
    // history - the history object from React router.
    //
    constructor({displayStatusMessageMethod, history}) {
        super();

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;        
        this.dataModel = new FlashcardsDataModel();
    };


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = () => {
        this.displayStatusMessageMethod('Please select an option from the choices below:');
    };


    exitTheApp = async () => {

        try {
            await this.dataModel.logout(store.user.token);

            // Reset the user in the store.   
            store.user = {};

            this.displayStatusMessageMethod(
                'You have successfully exited Russian Flashcards');

            this.history.push('/');
        }
        catch(exception) {
            this.displayStatusMessageMethod(exception.message);
        }
    };
    
    
    // A React.js lifecycle method that renders the component.
    //    
    render() {
        return(
            <section className="options__buttons">
                <Button variant="primary"
                        onClick={() => this.history.push('/view-flashcards')}>
                            View Flashcards / Просмотр карточек
                </Button>
                <Button variant="primary" className="options__button--spaced-top"
                        onClick={() => this.history.push('/create-flashcard')}>
                            Create Flashcard / Создать карточку
                </Button> 
                <Button variant="primary"
                        onClick={() => this.history.push('/update-flashcard')}>
                            Update Flashcard / Обновить карточку
                </Button> 
                <Button variant="primary"
                        onClick={() => this.history.push('/delete-flashcard')}>
                            Delete Flashcard / Удалить карточк
                </Button> 
                <Button variant="primary" className="options__button--spaced-top"
                        onClick={() => this.history.push('/change-password')}>
                            Change Password / Изменить пароль
                </Button>             
                <Button variant="primary" className="options__button--spaced-top"
                        onClick={this.exitTheApp}>
                            Exit / Выход  из программы
                </Button>                                                
            </section>
        );
    };
}; 


export default OptionsView