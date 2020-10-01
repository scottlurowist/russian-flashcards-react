////////////////////////////////////////////////////////////////////////////////
//
// home-view-component.jsx
//
// This React component implements the home view of the Russian Flashcards
// application. 
//
////////////////////////////////////////////////////////////////////////////////


import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// This informs webpack to use this image.
// https://create-react-app.dev/docs/adding-images-fonts-and-files
import flag from './../../images/St.Basils_Cathedral_Moscow.jpg';




// Implements the view Home view.
class HomeView extends React.Component {

    constructor({displayStatusMessageMethod, history}) {
        super();
        console.log(history)
        this.history = history;
        this.displayStatusMessageMethod = displayStatusMessageMethod;
    }


    // A React.js lifecycle method that is invoked immediately after a
    // component is mounted (inserted into the tree). 
    //
    componentDidMount() {
        this.displayStatusMessageMethod('Welcome to Russian Flashcards /' + 
            'добро пожаловать в карточки на русском');
    };


    // A React.js lifecycle method that renders the component.
    //
    render() {

        return (
            <section className="buttons__actions" variant="primary">
                <Container>
                    <Row>
                        <Col>
                        <div className="div--centered-content">
                            <img src={ flag } width="648" height="486" />
                        </div>                    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="div--centered-content">
                                <Button className="button__action"
                                        onClick={() => this.history.push('/signup')}>
                                    Create Account / Зарегистрироваться
                                </Button>
                                <Button className="button__action" variant="primary"
                                        onClick={() => this.history.push('/signin')}>
                                    Sign In / Войти
                                </Button> 
                            </div>
                        </Col>
                    </Row>                
                </Container>  
            </section>
        );
    };
}


export default HomeView