import React from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { AuthContext} from "../authform/AuthContext";

class UpdateUser extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            modal: false
        }
    }

    componentWillMount() {
        this.setState({
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.update(e, this.state)
    }

    render(){
        return(
            <div>
                <Button color="danger" onClick={this.toggle}>Update Account</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader>Update Account</ModalHeader>
              <ModalBody>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="firstName">first name</Label>
                    <Input id="firstName" type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">last name</Label>
                    <Input id="lastName" type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">email</Label>
                    <Input id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.deleteAccount}>Update Account</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
            </div>
        )
    }

}

export default props => (
    <AuthContext.Consumer>
        {auth => <UpdateUser {...props} auth={auth} />}
    </AuthContext.Consumer>
);