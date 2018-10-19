import React from "react";
import { Col, Row, FormGroup, Button, Form, Input, Label, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import { AuthContext} from "../authform/AuthContext";
// import UpdateUser from '../userinfo/UpdateUser';
import APIURL from '../helpers/environment';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      modal: false
    };
  }

  componentWillMount = () => {
    this.fetchAccountInfo()
    this.setState({
      firstName: this.state.firstName,
      lastName: this.state.lastName, 
      email: this.state.email
    })
  }

  fetchAccountInfo = () => {
    let token = localStorage.getItem('token')
    // console.log(this.props.auth)
    fetch(`${APIURL}/user`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': token
          // this.props.auth.sessionToken  
        })
      })
      .then(res => res.json())
      .then(userData => this.setState(userData))  
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {this.setState({[e.target.name]: e.target.value})
  console.log(e.target.value)}

  submitUpdate = (e) => {
    e.preventDefault();
    this.props.update(e, this.state)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteAccount = () => {
    let token = localStorage.getItem('token')
    // console.log(this.props.auth)
    fetch(`${APIURL}/user`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': token
          // this.props.auth.sessionToken
        })
      })
      .then((res) => this.props.logout())
  }

  updateAccount = () => {
    let token = localStorage.getItem('token')
    fetch(`${APIURL}/user`, {
      method: 'PUT',
      body: JSON.stringify({user:this.state}),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    })
    // .then(<UncontrolledAlert color="info">Success!</Alert>)
    .then((res) => alert("Success!"))
    .then(this.toggle())
  }

  render() {
    return ( 
      <div className="fetchinfo">
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Form onSubmit={this.handleSubmit} >
              <Label className="accountlabel" for="firstName" > first name </Label> 
                <Input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName}/> 
                <br/>
              <Label className="accountlabel" for="lastName" > last name </Label>
                <Input type="text"name="lastName"onChange={this.handleChange} value={this.state.lastName}/> 
                <br/>
              <Label className="accountlabel" for="email" > email </Label> 
                <Input type="email" name="email" onChange={this.handleChange} value={this.state.email}/> 
            </Form > 
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <Button className="accountbutton" type="submit" onClick={this.updateUser}>Update Account</Button> */}
            {/* <Button className="accountbutton" type="submit" color="danger" onClick={this.deleteAccount}>Delete Account </Button>  */}
            {/* <Button className="accountbutton" color="danger" onClick={this.toggle}>Delete Account</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal> */}
            <Button className="accountbutton" type="submit" onClick={this.toggle}>Update Account</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader>Update Account</ModalHeader>
              <ModalBody>
              <Form onSubmit={this.submitUpdate}>
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
                <Button color="primary" onClick={this.updateAccount}>Update Account</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
            <Button className="accountbutton" type="submit" color="danger" onClick={this.deleteAccount}>Delete Account </Button> 
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default props => (
  <AuthContext.Consumer>
      {auth => <Account {...props} auth={auth} />}
  </AuthContext.Consumer>
)