////////////////////////////////////////////////////////////////////////////////
//
// input-field-component.jsx
//
// This React component implements a generic input field.
//
// This component takes a 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Form from 'react-bootstrap/Form';




const InputField = ({id, label, type, placeholder, value}) => {

    return (
        <Form>
            <Form.Group controlId={id}>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={type} 
                              placeholder={placeholder}
                              value={value} />
            </Form.Group>
        </Form>
    );
};


export default InputField;