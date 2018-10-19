import React from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {AuthContext} from './AuthContext';

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
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
        fetch("http://localhost:3000/user/login", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.auth.setToken(data.sessionToken)
            localStorage.setItem('token', data.sessionToken)
        })
        e.preventDefault()
    }

    render() {
        return(
            <div>
                <h1>Login</h1>
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
                </Form>
                <Button onClick={this.props.toggleForm}>Create an account</Button>
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <Login {...props} auth={auth} />}
    </AuthContext.Consumer>
)