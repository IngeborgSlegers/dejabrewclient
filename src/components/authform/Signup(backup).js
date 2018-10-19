import React from 'react';
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {AuthContext} from './AuthContext';

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
        fetch("http://localhost:3000/user/signup", {
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
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstname">first name</Label>
                        <Input id="firstname" type="text" name="firstname" placeholder="first name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastname">last name</Label>
                        <Input id="lastname" type="text" name="lastname" placeholder="last name" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">email</Label>
                        <Input id="su_email" type="email" name="email" placeholder="email" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
                <Button onClick={this.props.toggleForm}>Already have an account?</Button>
            </div>
        )
    }
}

// export default props => (
//     <AuthContext.Consumer>
//         {auth => <Signup {...props} auth={auth} />}
//     </AuthContext.Consumer>
// );