////////////////////////////////////////////////////////////////////////////////
//
// signup-view-component.jsx
//
// This React component implements the signup view of the Russian Flashcards
// application. 
//
////////////////////////////////////////git ////////////////////////////////////////


import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




// Implements the Signup view.
//
class SignupView extends React.Component {

    constructor({displayStatusMessageMethod, history}) {
        super();

        this.state = {
            email: '',
            password: '',
            confirmation_password: ''
        }

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
    }


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = () => {
        this.displayStatusMessageMethod('Signup for Russian Flashcards');
    }    


    // Handles the form submission which in turn invokes the web service to
    // signup for the app. If successful, then we navigate to the options view.
    //
    // event - A React synthetic event that represents the form submission.
    //
    handleSubmit = (event) => {
        event.preventDefault();

        //if ()
        // TODO: API call here...
        alert(this.state.email + '  ' + this.state.password + '  ' + 
              this.state.confirmation_password)
        this.history.push('/signin');
    };


    // Handles the typing from the user in the password input field.
    //
    // event - A React synthetic event that represents a change in the password
    //         input field when the user types. This is needed for controlled
    //         form elements. 
    //
    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    };


    // Handles the typing from the user in the password input field.
    //
    // event - A React synthetic event that represents a change in the password
    //         input field when the user types. This is needed for controlled
    //         form elements. 
    //
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
    };


    // Handles the typing from the user in the confirmation password input
    // field.
    //
    // event - A React synthetic event that represents a change in the password
    //         confirmation input field when the user types. This is needed for
    //         controlled form elements. 
    //
    handleConfirmationPasswordChange = (event) => {
        this.setState({confirmation_password: event.target.value})
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
                                <Form.Label className="text-primary">
                                    Email / электронная почта
                                </Form.Label>
                                <Form.Control type="text" 
                                              onChange={ this.handleEmailChange }  
                                              value={this.state.email}
                                              placeholder='email' />
                            </Form.Group>
                            <Form.Group controlId="password-text" >  
                                <Form.Label className="text-danger">
                                    Password / Пароль
                                </Form.Label>
                                <Form.Control type="password" 
                                              onChange={ this.handlePasswordChange }  
                                              value={this.state.password}
                                              placeholder='password' />                                           
                            </Form.Group>
                            <Form.Group controlId="password-text" >  
                                <Form.Label className="text-danger">
                                    Password Confirmation / Подтвердите Пароль
                                </Form.Label>
                                <Form.Control type="password" 
                                              onChange={ 
                                                  this.handleConfirmationPasswordChange
                                              }  
                                              value={this.state.confirmation_password}
                                              placeholder='confirm password' />                                           
                            </Form.Group>                            
                        </Col>
                    </Row>
                    <Row className="buttons__actions">
                        <Button type="submit" variant="primary"
                                disabled={this.state.email === '' ||
                                          this.state.password === '' ||
                                          this.state.confirmation_password === ''}
                                className="button__action" >
                            Sign Up / Войти
                        </Button>
                        <Button variant="primary" className="button__action"
                                onClick={() => this.history.push('/')} >
                            Return / вернуться
                        </Button>                                                                
                    </Row>
                </Form>
            </section>
        );
    }
}


export default SignupView