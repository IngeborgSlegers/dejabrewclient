import React from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {AuthContext} from './AuthContext';
import APIURL from '../helpers/environment';

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(
            (response) => response.json()
        )
        .then((data) => {
            this.props.auth.setToken(data.sessionToken)
        })
        e.preventDefault()
    }

    render() {
        return(
            <div className="signupform">
                <Container className="d-flex justify-content-center signupform">
                    <Row>
                        <Col>
                            <h2>Sign Up</h2>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="firstname">first name</Label>
                                    <Input id="firstname" required type="text" name="firstName" placeholder="first name" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastname">last name</Label>
                                    <Input id="lastname" required type="text" name="lastName" placeholder="last name" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">email</Label>
                                    <Input id="su_email" required type="email" name="email" placeholder="email" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">password</Label>
                                    <Input id="su_password" required type="password" name="password" placeholder="password" minLength="5" required onChange={this.handleChange} />
                                </FormGroup>
                                <Button className="signupbutton" type="submit">Submit</Button>
                            </Form>
                            <Button className="signupbutton" onClick={this.props.toggleForm}>Already have an account?</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <Signup {...props} auth={auth} />}
    </AuthContext.Consumer>
);