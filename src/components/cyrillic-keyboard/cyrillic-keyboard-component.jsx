////////////////////////////////////////////////////////////////////////////////
//
// cyrillic-keyboard-component.jsx
//
// This React component implements a Dyrillic keyboard.
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Button from 'react-bootstrap/Button';

import './cyrillic-keyboard-component.scss';




export const CyrillicKeyboard = () => {

    return (
        <div className="cyrillic-soft-keyboard">
            { /* The top row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button variant="danger" className="cyrillic__button">ё</Button>
                <Button variant="danger" className="cyrillic__button">й</Button>
                <Button variant="danger" className="cyrillic__button">ц</Button>
                <Button variant="danger" className="cyrillic__button">у</Button>
                <Button variant="danger" className="cyrillic__button">к</Button>                
                <Button variant="danger" className="cyrillic__button">е</Button>    
                <Button variant="danger" className="cyrillic__button">н</Button>
                <Button variant="danger" className="cyrillic__button">г</Button>
                <Button variant="danger" className="cyrillic__button">ш</Button>
                <Button variant="danger" className="cyrillic__button">щ</Button>
                <Button variant="danger" className="cyrillic__button">з</Button>
                <Button variant="danger" className="cyrillic__button">х</Button>
                <Button variant="danger" className="cyrillic__button">ъ</Button>
            </div>
            { /* The 2nd row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button variant="danger" className="cyrillic__button">ф</Button>
                <Button variant="danger" className="cyrillic__button">ы</Button>
                <Button variant="danger" className="cyrillic__button">в</Button>
                <Button variant="danger" className="cyrillic__button">а</Button>
                <Button variant="danger" className="cyrillic__button">п</Button>
                <Button variant="danger" className="cyrillic__button">р</Button>
                <Button variant="danger" className="cyrillic__button">о</Button>
                <Button variant="danger" className="cyrillic__button">л</Button>
                <Button variant="danger" className="cyrillic__button">д</Button>
                <Button variant="danger" className="cyrillic__button">ж</Button>
                <Button variant="danger" 
                        className="cyrillic__button enter-key ">
                    вход
                </Button>
            </div>    
            { /* The final row of our Cyrillic soft keyboard. */}
            <div className="cyrillic-soft-keyboard-row">
                <Button variant="danger" className="cyrillic__button">я</Button>
                <Button variant="danger" className="cyrillic__button">ч</Button>
                <Button variant="danger" className="cyrillic__button">с</Button>
                <Button variant="danger" className="cyrillic__button">м</Button>
                <Button variant="danger" className="cyrillic__button">и</Button>
                <Button variant="danger" className="cyrillic__button">т</Button>
                <Button variant="danger" className="cyrillic__button">ь</Button>
                <Button variant="danger" className="cyrillic__button">б</Button>
                <Button variant="danger" className="cyrillic__button">ю</Button>
            </div>                  
        </div> 
    );
}