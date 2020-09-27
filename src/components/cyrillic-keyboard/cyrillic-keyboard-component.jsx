////////////////////////////////////////////////////////////////////////////////
//
// cyrillic-keyboard-component.jsx
//
// This React component implements a Cyrillic keyboard.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Button from 'react-bootstrap/Button';

import './cyrillic-keyboard-component.scss';



// We are destructuring the props property.
export const CyrillicKeyboard = ({keyboardPressHandler}) => {

    return (
        <div className="cyrillic-soft-keyboard">
            { /* The top row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ё</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">й</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ц</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">у</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                         className="cyrillic__button">к</Button>                
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">е</Button>    
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">н</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">г</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ш</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">щ</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">з</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">х</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ъ</Button>
            </div>
            { /* The 2nd row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ф</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ы</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">в</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">а</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">п</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">р</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">о</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">л</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">д</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ж</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button enter-key ">
                    вход
                </Button>
            </div>    
            { /* The final row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">я</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ч</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">с</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">м</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">и</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">т</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ь</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">б</Button>
                <Button onClick={keyboardPressHandler} variant="danger"
                        className="cyrillic__button">ю</Button>
            </div>                  
        </div> 
    );
}