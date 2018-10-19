import React from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap'

class DeleteUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            modal: false
        }
    }

    render() {
        return(
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader>ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT?</ModalHeader>
                <ModalBody>
                    "Master of the teeeaaaa. We've drunk it all before but now we're back to get some more. You know what I neeeeeedddd. DÉJÀ BREEWWWWWWW!" 
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.deleteAccount}>Delete Account</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        )
    }
}