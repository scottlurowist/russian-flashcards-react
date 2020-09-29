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

import './options-view-component.scss';



// Implements the Options view.
//
// props
const OptionsView = (routerProps) => {

    return(
        <section className="options__buttons">
            <Button variant="primary"
                    onClick={() => routerProps.history.push('/view-flashcards')}>
                        View Flashcards / Просмотр карточек
            </Button>
            <Button variant="primary" className="options__button--spaced-top"
                    onClick={() => routerProps.history.push('/create-flashcard')}>
                        Create Flashcard / Создать карточку
            </Button> 
            <Button variant="primary"
                    onClick={() => routerProps.history.push('/update-flashcard')}>
                        Update Flashcard / Обновить карточку
            </Button> 
            <Button variant="primary"
                    onClick={() => routerProps.history.push('/delete-flashcard')}>
                        Delete Flashcard / Удалить карточк
            </Button> 
            <Button variant="primary" className="options__button--spaced-top"
                    onClick={() => routerProps.history.push('/change-password')}>
                        Change Password / Изменить пароль
            </Button>             
            <Button variant="primary" className="options__button--spaced-top"
                    onClick={() => routerProps.history.push('/')}>
                        Exit / Выход  из программы
            </Button>                                                
        </section>
    );
}


export default OptionsView