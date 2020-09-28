////////////////////////////////////////////////////////////////////////////////
//
// cyrillic-keyboard-component.jsx
//
// This React component implements a Cyrillic keyboard.
//
// This component takes a callback function, keyboardPressHandler, and 
// translates Cyrillic keyboard synthetic events and extracts the Cyrillic
// character. It then passes that character as an argument to
// keyboardPressHandler. This allows this components to be reused in any web
// view because it is the decision of a parent component what to do with the
// keypress value.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Button from 'react-bootstrap/Button';

import './cyrillic-keyboard-component.scss';




// This function handles synthetic click events from the Cyrillic keyboard and
// extracts the Cyrillic character of the key. It then passes it to a callback 
// passed by a parent component, and the parent component decides what to do 
// with the character.
//
// - keyboardPressHandler - A callback from a parent component that takes a
//                          Cyrillic character as an argument.
// 
// We are destructuring the props property.
//
const CyrillicKeyboard = ({keyboardPressHandler}) => {

    return (
        <div className="cyrillic-soft-keyboard">
            { /* The top row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger" 
                        className="cyrillic__button">ё</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger" 
                        className="cyrillic__button">й</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger" 
                        className="cyrillic__button">ц</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">у</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">к</Button>                
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">е</Button>    
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">н</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">г</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">ш</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">щ</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">з</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">х</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">ъ</Button>
            </div>
            { /* The 2nd row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">ф</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">ы</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">в</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">а</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">п</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">р</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">о</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">л</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">д</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">ж</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button enter-key ">
                    вход
                </Button>
            </div>    
            { /* The final row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">я</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">ч</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">с</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">м</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">и</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">т</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">ь</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">б</Button>
                <Button onClick={e => keyboardPressHandler(e.target.textContent)}
                        variant="danger"
                        className="cyrillic__button">ю</Button>
            </div>                  
        </div> 
    );
}


export default CyrillicKeyboard;