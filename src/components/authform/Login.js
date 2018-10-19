import React from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {AuthContext} from './AuthContext';

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            err: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error("Email or password is incorrect.")
                }
            }).then((data) => {
            this.props.auth.setToken(data.sessionToken)
            localStorage.setItem('token', data.sessionToken)
        })
        .catch(err => this.setState({ err: "Email or password is incorrect."}))
        e.preventDefault()
        
    }

    render() {
        return(
            <div>
                <Container className="d-flex justify-content-center loginform">
                    <Row>
                        <Col>
                            <h2>Login</h2>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="email">email</Label>
                                    <Input id="li_email" type="email" name="email" placeholder="enter email" onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">password</Label>
                                    <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                                </FormGroup>
                                <Button type="submit">Submit</Button>
                                <p className="errormessage">{this.state.err}</p>
                            </Form>
                            <Button onClick={this.props.toggleForm}>Create an account</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <Login {...props} auth={auth} />}
    </AuthContext.Consumer>
)