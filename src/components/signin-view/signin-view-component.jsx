////////////////////////////////////////////////////////////////////////////////
//
// signin-view-component.jsx
//
// This React component implements the signin view of the Russian Flashcards
// application. 
//
////////////////////////////////////////git ////////////////////////////////////////


import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';




// Implements the Signin view.
//
class SigninView extends React.Component {

    constructor({displayStatusMessageMethod, history}) {
        super();

        this.state = {
            email: '',
            password: ''
        }

        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
    }


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount = () => {
        this.displayStatusMessageMethod('Signin to Russian Flashcards');
    }    


    // Handles the form submission which in turn invokes the web service to
    // sign into the app. If successful, then we navigate to the options view.
    //
    // event - A React synthetic event that represents the form submission.
    //
    handleSubmit = (event) => {
        event.preventDefault();

        //if ()
        // TODO: API call here...
        alert(this.state.email + '  ' + this.state.password)
        this.history.push('/options');
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


    // Handles the typing from the user in the email input field.
    //
    // event - A React synthetic event that represents a change in the email
    //         input field when the user types. This is needed for controlled
    //         form elements. 
    //
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value})
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
                                <Form.Control type="text" 
                                              onChange={ this.handlePasswordChange }  
                                              value={this.state.password}
                                              placeholder='password' />                                           
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                    <Row className="buttons__actions">
                        <Button type="submit" variant="primary"
                                disabled={this.state.email === '' ||
                                          this.state.password === ''}
                                className="button__action" >
                            Sign In / Войти
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


export default SigninView