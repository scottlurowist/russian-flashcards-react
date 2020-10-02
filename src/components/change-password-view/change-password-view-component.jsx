////////////////////////////////////////////////////////////////////////////////
//
// change-password-view-component.jsx
//
// This React component implements the change password view of the Russian 
// Flashcards application. 
//
////////////////////////////////////////git ////////////////////////////////////////


import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import store from './../../store';
import FlashcardsDataModel from './../../models/data-model';




// Implements the change password view.
//
class ChangePasswordView extends React.Component {

    constructor({displayStatusMessageMethod, history}) {
        super();

        this.state = {
            old_password: '',
            new_password: ''
        }

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
        this.dataModel = new FlashcardsDataModel();
    }


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = () => {
        this.displayStatusMessageMethod('Change password');
    }    


    // Handles the form submission which in turn invokes the web service to
    // change the password. If successful, then we navigate to the options view.
    //
    // event - A React synthetic event that represents the form submission.
    //
    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await this.dataModel.changePassword(this.state.old_password,
                this.state.new_password, store.user.token);

            this.history.push('/options');
        }
        catch(exception) {
            this.displayStatusMessageMethod(exception.message);
        }
    };


    // Handles the typing from the user in the old password input field.
    //
    // event - A React synthetic event that represents a change in the old password
    //         input field when the user types. This is needed for controlled
    //         form elements. 
    //
    handleOldPasswordChange = (event) => {
        this.setState({old_password: event.target.value})
    };


    // Handles the typing from the user in the new password input field.
    //
    // event - A React synthetic event that represents a change in the new password
    //         input field when the user types. This is needed for controlled
    //         form elements. 
    //
    handleNewPasswordChange = (event) => {
        this.setState({new_password: event.target.value})
    };


    // A React.js lifecycle method that renders the component.
    //
    render() {

        return (
            <section className="input__controls">
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="email-text" >
                                <Form.Label>
                                    Old Password
                                </Form.Label>
                                <Form.Control type="text" 
                                              onChange={ this.handleOldPasswordChange }  
                                              value={this.state.old_password}
                                              placeholder='English' />
                            </Form.Group>
                            <Form.Group controlId="password-text" >  
                                <Form.Label>
                                    New Password
                                </Form.Label>
                                <Form.Control type="password" 
                                              onChange={ this.handleNewPasswordChange }  
                                              value={this.state.new_password}
                                              placeholder='password' />                                           
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="buttons__actions">
                        <Button type="submit" variant="primary"
                                disabled={this.state.old_password === '' ||
                                          this.state.new_password === ''}
                                className="button__action" >
                            Change Password
                        </Button>
                        <Button variant="primary" className="button__action"
                                onClick={() => this.history.push('/options')} >
                            Return / вернуться
                        </Button>                                                                
                    </Row>
                </Form>
            </section>
        );
    }
}


export default ChangePasswordView